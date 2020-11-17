<template>
  <div id="calculator">
    <div id="display">{{ current || 0 }}</div>
    <div @click="clear" class="number">C</div>
    <div @click="sign" class="number">+/-</div>
    <div @click="percent" class="number">%</div>
    <div @click="divide" class="number action">÷</div>
    <div @click="append('7')" class="number">7</div>
    <div @click="append('8')" class="number">8</div>
    <div @click="append('9')" class="number">9</div>
    <div @click="multiply" class="number action">x</div>
    <div @click="append('4')" class="number">4</div>
    <div @click="append('5')" class="number">5</div>
    <div @click="append('6')" class="number">6</div>
    <div @click="minus" class="number action">-</div>
    <div @click="append('1')" class="number">1</div>
    <div @click="append('2')" class="number">2</div>
    <div @click="append('3')" class="number">3</div>
    <div @click="plus" class="number action">+</div>
    <div @click="append('0')" class="number zero">0</div>
    <div @click="dot" class="number">.</div>
    <div @click="equal" class="number action">=</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: "",
      operator: 0,
      previous: null,
      operatorClicked: false,
    };
  },
  methods: {
    clear() {
      this.current = "";
    },
    sign() {
      this.current =
        this.current.charAt(0) === "-"
          ? this.current.slice(1)
          : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current)}` / 1000;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = "";
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      this.current.indexOf(".") === -1 ? this.append(".") : true;
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    multiply() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    plus() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal() {
        this.current = `${this.operator(parseFloat(this.current), parseFloat(this.previous))}`
        this.previous = null;    
    },
  },
};
</script>

<style scoped>
#calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  font-size: 40px;
  width: 400px;
  margin: 0 auto;
}

#display {
  grid-column: 1/5;
  background-color: black;
  color: #fff;
}

.number.zero {
  grid-column: 1/3;
}

.number {
  background-color: #e1e1e1;
  border: 1px solid #5b6084;
  cursor: pointer;
}

.number.action {
  background-color: orange;
  color: #fff;
}
</style>