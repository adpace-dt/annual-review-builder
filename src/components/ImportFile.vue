<template>
  <div @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
    <form class="form-inline">
      <div class="form-group">
        <label class="label" for="file">Upload Microsoft Forms Excel file</label>
        <input type="file" class="form-control btn btn-outline-light" id="file" :accept="SheetJSFT" @change="_change"/>
      </div>
    </form>
  </div>
</template>

<script>
import XLSX from 'xlsx';

const make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x, i) => ({
  name: XLSX.utils.encode_col(i),
  key : i
}));
const _SheetJSFT = [
  "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function(x) { return "." + x; }).join(",");
export default {
  name: "ImportFile",
  data() {
    return {
      SheetJSFT: _SheetJSFT
    };
  },
  methods: {
    setData(parsedData) {
      this.$store.dispatch({
        type: 'setData',
        data: parsedData
      })
    },
    setCols(cols) {
      this.$store.dispatch({
        type: 'setCols',
        data: cols
      })
    },
    _suppress(evt) {
      evt.stopPropagation();
      evt.preventDefault();
    },
    _drop(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      const files = evt.dataTransfer.files;
      if (files && files[0]) this._file(files[0]);
    },
    _change(evt) {
      const files = evt.target.files;
      if (files && files[0]) this._file(files[0]);
    },
    _file(file) {
      /* Boilerplate to set up FileReader */
      const reader = new FileReader();
      reader.onload = (e) => {
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, {type: 'binary'});
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const parsedData = XLSX.utils.sheet_to_json(ws, {header: 1});
        /* Update state */
        this.setData(parsedData);
        let _cols = make_cols(ws['!ref'])
        this.setCols(_cols);
        // this.cols = make_cols(ws['!ref']);
      };
      reader.readAsBinaryString(file);
    }
  },
}
</script>

<style scoped>
.label {
  margin-right: 0.5rem;
}

.form-inline {
  max-width: 400px;
  margin: 2rem auto;
}
</style>
