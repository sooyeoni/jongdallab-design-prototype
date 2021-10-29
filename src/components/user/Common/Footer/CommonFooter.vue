<template>
  <footer ref="footer">
    <div class="container">
      <div class="left_wrap">
        <ul>
          <li>
            <button
              onclick="window.open('/privacyPolicy','Bujamarket','width=900,height=530,location=no,status=no,scrollbars=no');"
            >
              개인정보 처리방침
            </button>
          </li>
          <li>
            <button
              onclick="window.open('/termsOfService','Bujamarket','width=900,height=530,location=no,status=no,scrollbars=no');"
            >
              이용약관
            </button>
          </li>
          <li><router-link to="/faq">자주 묻는 질문</router-link></li>
        </ul>
        <div class="business_info">
          <p><span>회사명:(주)종달랩</span> <span>대표:성종형</span></p>
          <p>
            본사:서울 중구 퇴계로 36길2, 동국대학교 충무로관 신관 221호
          </p>
          <p>
            지사:서울 종로구 종로 6, 광화문우체국 6층 서울창조경제혁신센터
          </p>
          <p>
            통신판매업:2017-서울중구-1621호<a
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2718600528"
              target="_blank"
              >사업자 정보 보기</a
            >
          </p>
          <p>사업자 등록번호:271-86-00528</p>
          <p>
            <span>대표 전화: 02-2088-1716</span><span>팩스: 02-2274-1116</span>
          </p>
          <p>© Joingdallab. All rights reserved.</p>
        </div>
      </div>
      <div class="right_sns_wrap">
        <ul class="sns_wrap">
          <li>
            <a
              href="https://blog.naver.com/jongdallab"
              target="_blank"
              title="부자마켓 블로그 바로가기"
            >
              <i class="fa fa-bold" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/explore/tags/%EB%B6%80%EC%9E%90%EB%A7%88%EC%BC%93/"
              target="_blank"
              title="부자마켓 인스타그램 바로가기"
            >
              <i class="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://pf.kakao.com/_vxmVMC"
              target="_blank"
              title="부자마켓 카카오톡 바로가기"
            >
              <i class="fa fa-comments" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CommonFooter",
};
</script>

<style scoped lang="scss">
footer {
  background: #171717;
  color: #c4c4c4;
  padding: 60px 0px 60px;
  font-size: $md-font;
  .container {
    display: flex;
    justify-content: space-between;
  }
  .left_wrap {
    ul {
      li {
        display: inline-block;
        margin-bottom: 15px;
        margin: 0 4px 15px 0;
        position: relative;
        a {
          color: white;
          font-size: $lg-font;
        }
        button {
          background-color: transparent;
          color: white;
          border: 0;
          font-size: $lg-font;

          &:nth-child(2)::before {
            content: "";
            display: inline-block;
            width: 1px;
            height: 10px;
            margin: -4px 10px 0 10px;
            background: #c4c4c4;
            vertical-align: middle;
          }
        }
        &:nth-child(2) button::before {
          content: "";
          display: inline-block;
          width: 1px;
          height: 10px;
          margin: -4px 10px 0 10px;
          background: #c4c4c4;
          vertical-align: middle;
        }
        &:nth-child(3)::before {
          content: "";
          display: inline-block;
          width: 1px;
          height: 10px;
          margin: -4px 10px 0 10px;
          background: #c4c4c4;
          vertical-align: middle;
        }
      }
    }
    .business_info {
      margin-top: 35px;
      p {
        margin-bottom: 10px;
        font-weight: 300;
        font-size: $default-font;
        span {
          display: inline-block;
          margin-right: 20px;
        }
        a {
          color: white;
          margin-left: 5px;
          text-decoration: underline;
        }
      }
    }
  }
  .right_sns_wrap {
    display: flex;
    flex-direction: column-reverse;
    ul {
      display: flex;
      li {
        margin: 0 10px;
        a {
          color: #c4c4c4;
          i {
            font-size: 25px;
          }
          &:hover {
            color: white;
          }
        }
      }
    }
  }
}
</style>
