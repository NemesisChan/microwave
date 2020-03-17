<template>
  <div id="app">
    <p class="oshietekun">電子レンジ加熱時間おしえて君</p>
    <div id="input_item">
      <select id="watt" class="input_item" @change="calculate()" v-model="selected">
        <option
          v-for="option in options"
          v-bind:value="option.value"
          v-bind:key="option.text"
        >{{ option.text }}</option>
      </select>
      <span class="unit">W で</span>
      <input
        type="tel"
        id="minute"
        class="input_item"
        onfocus="this.select();"
        maxlength="2"
        onkeyup="this.value=this.value.replace(/[^0-9]+/,'')"
        @change="calculate()"
        v-model="defaultMinute"
      />
      <span class="unit">分</span>
      <input
        type="tel"
        id="second"
        class="input_item"
        onfocus="this.select();"
        maxlength="2"
        onkeyup="this.value=this.value.replace(/[^0-9]+/,'')"
        @change="calculate()"
        v-model="defaultSecond"
      />
      <span class="unit">秒</span>
    </div>
    <br />
    <div class="output">
      <table id="table" align="center">
        <tbody>
          <tr v-for="row in items" v-bind:key="row.watt">
            <td>
              {{row.watt}}
              <span class="unit">W で</span>
            </td>
            <td>
              {{row.minute}}
              <span class="unit">分</span>
            </td>
            <td>
              {{row.second}}
              <span class="unit">秒</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <footer>
      <p>ネメシスちゃん a.k.a プログラミングをする点P</p>
      <a href="https://twitter.com/nemesispointp" target="_blank">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
      <a href="https://github.com/NemesisChan/microwave" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "500",
      options: [
        { text: "100", value: "100" },
        { text: "200", value: "200" },
        { text: "500", value: "500" },
        { text: "600", value: "600" },
        { text: "700", value: "700" },
        { text: "800", value: "800" },
        { text: "900", value: "900" },
        { text: "1000", value: "1000" },
        { text: "1200", value: "1200" },
        { text: "1500", value: "1500" }
      ],
      items: [
        { watt: 100, minute: 15, second: 0 },
        { watt: 200, minute: 7, second: 30 },
        { watt: 500, minute: 3, second: 0 },
        { watt: 600, minute: 2, second: 30 },
        { watt: 700, minute: 2, second: 8 },
        { watt: 800, minute: 1, second: 52 },
        { watt: 900, minute: 1, second: 40 },
        { watt: 1000, minute: 1, second: 30 },
        { watt: 1200, minute: 1, second: 15 },
        { watt: 1500, minute: 1, second: 0 }
      ],
      defaultWatt: "500",
      defaultMinute: 3,
      defaultSecond: 0
    };
  },

  watch: {},

  methods: {
    calculate: function() {
      const watt = parseInt(document.getElementById("watt").value);
      const minute = parseInt(document.getElementById("minute").value);
      const second = parseInt(document.getElementById("second").value);
      const ans = watt * (minute * 60 + second);

      let it = this.items;
      it.forEach(it => {
        it.minute = Math.floor(ans / it.watt / 60);
        it.second = Math.floor((ans / it.watt) % 60);
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

p.oshietekun {
  border-bottom: solid 0.2px #b33e5c;
}

span.unit {
  font-size: 80%;
  margin: 0px 5px 0px 5px;
}

#input_item {
  padding: 10px 0px 10px 0px;
  background-color: #f5f5f5;
}

.input_item {
  padding: 0px 5px 0px 0px;
  font-size: 20px;
  width: 100px;
  text-align: right;
  border-radius: 3px;
  border: 2px solid #ddd;
}

#minute,
#second {
  width: 50px;
}

.input_item:focus {
  border: 2px solid #b33e5c;
  z-index: 10;
  outline: 0;
}

.output {
  font-size: 20px;
  padding: 0 0 20px 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 3px solid #b33e5c;
}

table td {
  padding: 3px 10px;
  text-align: right;
}

table tr:nth-child(odd) {
  background-color: #f5f5f5;
}

footer {
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-size: 20px;
  background-color: #f5f5f5;
}

footer p {
  font-size: 14px;
}

footer a {
  color: black;
  margin: 0px 10px 0px 10px;
  text-decoration: underline;
}
</style>