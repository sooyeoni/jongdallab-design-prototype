import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
//사용자 메인
const Home = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/Home");
//상품검색 결과 및 상품리스트 페이지
const ProductList = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/ProductList");
//상품검색 결과 및 상품리스트 페이지
const RequestFreeSample = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/RequestFreeSample");
const Login = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/Login");
const EmailJoin = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/EmailJoin");
const MypageBasicInfo = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/MypageBasicInfo");
const MypageBusinesspersonInfo = () =>
  import(
    /* webpackChunkName: "admin" */ "@/components/user/MypageBusinesspersonInfo"
  );
const MypageInterestedProduct = () =>
  import(
    /* webpackChunkName: "admin" */ "@/components/user/MypageInterestedProduct"
  );
const FrequentlyAskedQuestions = () =>
  import(
    /* webpackChunkName: "admin" */ "@/components/user/FrequentlyAskedQuestions"
  );
const Inquire = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/Inquire");
const MypageInquireList = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/MypageInquireList");
const MypageInquireDetail = () =>
  import(
    /* webpackChunkName: "admin" */ "@/components/user/MypageInquireDetail"
  );
const MypageRequestQuote = () =>
  import(
    /* webpackChunkName: "admin" */ "@/components/user/MypageRequestQuote"
  );
const MypageOrderList = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/MypageOrderList");
const OrderDetail = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/OrderDetail");
const OrderRequest = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/OrderRequest");
const Estimate = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/Estimate");
const RequestProductionQuote = () =>
  import(
    /* webpackChunkName: "admin" */ "@/components/user/RequestProductionQuote"
  );
const TermsOfService = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/TermsOfService");
const PrivacyPolicy = () =>
  import(/* webpackChunkName: "admin" */ "@/components/user/PrivacyPolicy");
const KitUI = () =>
  import(/* webpackChunkName: "admin" */ "@/components/KitUI");

/*관리자 */
const AdminLogin = () =>
  import(/* webpackChunkName: "admin" */ "@/components/admin/AdminLogin");
const AdminMemberList = () =>
  import(/* webpackChunkName: "admin" */ "@/components/admin/AdminMemberList");
const AdminMemberDetail = () =>
  import(
    /* webpackChunkName: "admin" */ "@/components/admin/AdminMemberDetail"
  );
const InquiryList = () =>
  import(/* webpackChunkName: "admin" */ "@/components/admin/InquiryList");
const InquiryDetail = () =>
  import(/* webpackChunkName: "admin" */ "@/components/admin/InquiryDetail");
//상품등록
const ProductAdd = () =>
  import(/* webpackChunkName: "admin" */ "@/components/admin/ProductAdd");
//상품등록
const DataManage = () =>
  import(/* webpackChunkName: "admin" */ "@/components/admin/DataManage");
export const routes = [
  {
    path: "/",
    name: Vue.name,
    component: Home,
  },
  //상품 리스트
  {
    path: "/product/list",
    name: Vue.name,
    component: ProductList,
  },
  //무료샘플페이지
  {
    path: "/product/sample/request",
    name: Vue.name,
    component: RequestFreeSample,
  },
  //무료샘플페이지
  {
    path: "/faq",
    name: Vue.name,
    component: FrequentlyAskedQuestions,
  },
  {
    path: "/Login",
    name: Login,
    component: Login,
  },
  {
    path: "/join",
    name: EmailJoin,
    component: EmailJoin,
  },
  /*문의하기*/
  {
    path: "/inquire",
    name: Inquire,
    component: Inquire,
  },
  /*마이페이지 기본정보*/
  {
    path: "/mypage/basicInfo",
    name: MypageBasicInfo,
    component: MypageBasicInfo,
  },
  /*마이페이지 사업자 정보*/
  {
    path: "/mypage/businesspersonInfo",
    name: MypageBusinesspersonInfo,
    component: MypageBusinesspersonInfo,
  },
  /*마이페이지 관심상품*/
  {
    path: "/mypage/interestedProduct",
    name: MypageInterestedProduct,
    component: MypageInterestedProduct,
  },
  /*마이페이지 문의내역*/
  {
    path: "/mypage/inquireList",
    name: MypageInquireList,
    component: MypageInquireList,
  },
  /*마이페이지 문의상세*/
  {
    path: "/mypage/inquireDetail",
    name: MypageInquireDetail,
    component: MypageInquireDetail,
  },
  /*마이페이지 견적내역*/
  {
    path: "/mypage/requestQuote",
    name: MypageRequestQuote,
    component: MypageRequestQuote,
  },
  /*마이페이지 발주내역*/
  {
    path: "/mypage/orderList",
    name: MypageOrderList,
    component: MypageOrderList,
  },
  /*발주 수정*/
  {
    path: "/orderDetail",
    name: OrderDetail,
    component: OrderDetail,
  },
  /*발주 요청*/
  {
    path: "/orderRequest",
    name: OrderRequest,
    component: OrderRequest,
  },
  /*견적서*/
  {
    path: "/estimate",
    name: Estimate,
    component: Estimate,
  },
  /*제작견적요청 */
  {
    path: "/requestProductionQuote",
    name: RequestProductionQuote,
    component: RequestProductionQuote,
  },
  /*이용약관*/
  {
    path: "/termsOfService",
    name: TermsOfService,
    component: TermsOfService,
  },
  /*개인정보 처리방침*/
  {
    path: "/privacyPolicy",
    name: PrivacyPolicy,
    component: PrivacyPolicy,
  },
  {
    path: "/KitUI",
    name: KitUI,
    component: KitUI,
  },
  /* admin */
  {
    path: "/admin/login",
    name: Vue.name,
    component: AdminLogin,
  },
  {
    path: "/admin/memberList",
    name: Vue.name,
    component: AdminMemberList,
  },
  {
    path: "/admin/memberDetail",
    name: Vue.name,
    component: AdminMemberDetail,
  },
  {
    path: "/admin/product/add",
    name: Vue.name,
    component: ProductAdd,
  },
  {
    path: "/admin/inquiryList",
    name: Vue.name,
    component: InquiryList,
  },
  {
    path: "/admin/inquiryDetail",
    name: Vue.name,
    component: InquiryDetail,
  },
  {
    path: "/admin/dataManage",
    name: Vue.name,
    component: DataManage,
  },
  // {
  //   path: "/debug",
  //   name: Debug.name,
  //   component: Debug,
  // },

  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
