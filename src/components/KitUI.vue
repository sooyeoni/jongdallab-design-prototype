<template>
  <div>
    <div class="container">
      <div class="box">
        <textarea></textarea>
        <textarea disabled></textarea>
      </div>
      <div class="box">
        <button class="btn-default">Default</button>
        <button class="btn-default-disabled">Disabled</button>
        <button class="btn-round-default">Default</button>
        <button class="btn-border-round">Default</button>
        <button class="btn-border">Button</button>
        <button class="btn-border"><i class="fal fa-plus"></i> ADD</button>
        <button class="btn-reset"><i class="fal fa-redo"></i> Reset</button>
        <button class="btn-border-disabled">Disabled</button>
        <button class="btn-cancel">Cancel</button>
      </div>
      <div class="box">
        <p>
          <input type="text" />
        </p>
        <p class="error_input">
          <input type="text" class="error" />
          <span class="error_text"
            ><i class="fad fa-exclamation-circle"></i> 휴대폰 번호를 바르게
            입력하세요.</span
          >
        </p>
        <p>
          <input type="text" disabled />
        </p>
      </div>
      <!--기본 체크박스-->
      <div class="box">
        <label class="label_box" for="check">
          <input type="checkbox" id="check" />
          <span class="checkmark"></span>
        </label>
        <label class="label_box" for="dis">
          <input type="checkbox" id="dis" disabled />
          <span class="checkmark"></span>
        </label>
      </div>
      <!--버튼 타입 체크박스 -->
      <div class="box">
        <label class="box-checkbox-input"
          ><input
            type="checkbox"
            name="btnType"
            value="버튼타입checkbox1"
            checked="checked"
          /><span>버튼타입checkbox1</span></label
        >
        <label class="box-checkbox-input"
          ><input
            type="checkbox"
            name="btnType"
            value="버튼타입checkbox2"
          /><span>버튼타입checkbox2</span></label
        >
        <label class="box-checkbox-input-disabled"
          ><input
            type="checkbox"
            name="btnType"
            value="버튼타입checkbox3"
            disabled
          /><span>버튼타입checkbox3</span></label
        >
        <label class="box-checkbox-input"
          ><input
            type="checkbox"
            name="btnType"
            value="버튼타입checkbox4"
            disabled
          /><span>버튼타입checkbox4</span></label
        >
      </div>
      <!--기본RadioWrap-->
      <div class="box">
        <label class="radio_box"
          >radio
          <input type="radio" checked="checked" name="radio" />
          <span class="checkmarkradio"></span>
        </label>
        <label class="radio_box"
          >radio2
          <input type="radio" checked="checked" name="radio" />
          <span class="checkmarkradio"></span>
        </label>
        <label class="radio_box"
          >radioDisabled
          <input type="radio" name="radio" disabled />
          <span class="checkmarkradio"></span>
        </label>
      </div>
      <!--buttontype radio-->
      <div class="buttontypeRadio box">
        <input type="radio" id="value1" name="RadioType" checked />
        <label for="value1">
          <i class="fas fa-dot-circle"></i> <span>1</span></label
        >
        <input type="radio" id="value2" name="RadioType" />
        <label for="value2">
          <i class="fas fa-dot-circle"></i> <span>2</span></label
        >
        <input type="radio" id="value3" name="RadioType" disabled />
        <label for="value3">
          <i class="fas fa-dot-circle"></i> <span>3</span></label
        >
      </div>
      <!--button type radio2-->
      <div class="box">
        <label class="box-radio-input"
          ><input
            type="radio"
            name="btnType"
            value="버튼타입radio1"
            checked="checked"
          /><span>버튼타입radio1</span></label
        >
        <label class="box-radio-input"
          ><input
            type="radio"
            name="btnType"
            value="버튼타입radi21"
            checked="checked"
          /><span>버튼타입radio2</span></label
        >
      </div>
      <!--select-->
      <div class="box">
        <select>
          <option>Select</option>
          <option>Select2</option>
          <option>Select3</option>
          <option>Select4</option>
          <option>Select5</option>
        </select>
        <select disabled>
          <option>Disabled</option>
          <option>Select2</option>
          <option>Select3</option>
          <option>Select4</option>
          <option>Select5</option>
        </select>
      </div>
      <div class="box">
        <label class="basic_label">#샘플북</label>
        <label class="basic_close_label"
          >#샘플북 <i class="fal fa-times"></i
        ></label>
        <label class="background_label">#샘플북</label>
        <label class="background_close_label"
          >#샘플북 <i class="fal fa-times"></i
        ></label>
      </div>
      <!--paging-->
      <div class="box">
        <ul class="paging_box">
          <li>
            <button><i class="fal fa-angle-double-left"></i></button>
          </li>
          <li>
            <button><i class="fal fa-angle-left"></i></button>
          </li>
          <li>
            <button>1</button>
          </li>
          <li>
            <button>2</button>
          </li>
          <li>
            <button class="on">3</button>
          </li>
          <li>
            <button>4</button>
          </li>
          <li>
            <button>5</button>
          </li>
          <li>
            <button><i class="fal fa-angle-right"></i></button>
          </li>
          <li>
            <button><i class="fal fa-angle-double-right"></i></button>
          </li>
        </ul>
        <ul class="paging_box2">
          <li>
            <button><i class="fal fa-angle-double-left"></i></button>
          </li>
          <li>
            <button><i class="fal fa-angle-left"></i></button>
          </li>
          <li>
            <button>1</button>
          </li>
          <li>
            <button>2</button>
          </li>
          <li>
            <button class="on">3</button>
          </li>
          <li>
            <button>4</button>
          </li>
          <li>
            <button>5</button>
          </li>
          <li>
            <button><i class="fal fa-angle-right"></i></button>
          </li>
          <li>
            <button><i class="fal fa-angle-double-right"></i></button>
          </li>
        </ul>
      </div>
      <!--파일첨부-->
      <div class="file_wrap">
        <p>
          dasdasdasdas.jpg
          <button class="close_btn">
            <i class="fal fa-times"></i>
          </button>
        </p>
        <p class="filebox">
          <label for="file_input"
            >첨부하기 <i class="fal fa-paperclip"></i
          ></label>
          <input
            style="display: none;"
            type="file"
            id="file_input"
            accept=".png,.jpg,.jpeg,.ai,.pdf"
          />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "KitUI",
};
</script>
<style>
.container {
  width: 1280px;
  margin: 0 auto;
  overflow: hidden;
}
.box {
  display: flex;
  margin-bottom: 20px;
}
textarea:nth-child(1) {
  margin-right: 10px;
}
button {
  margin-right: 10px;
}
button:last-child {
  margin-right: 0;
}
input {
  margin-right: 10px;
}
.label_box {
  margin-right: 10px;
}
label.box-checkbox-input {
  margin-right: 10px;
}
label.radio_box {
  margin-right: 10px;
}
select {
  margin-right: 10px;
}
label {
  margin-right: 10px;
}
</style>
