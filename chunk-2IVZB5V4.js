import{a as R}from"./chunk-VLEZNE3T.js";import{b as v,c as w,d as E}from"./chunk-XEEJUPDW.js";import{a as b,b as H,c as P,d as I,e as $,f as z,g as O,h as B,i as F,j as A,k as N}from"./chunk-4NNBFF42.js";import"./chunk-VGE7C2D7.js";import"./chunk-AK6RWUQO.js";import{Ab as i,Bb as u,Cb as _,Gb as D,Kb as h,Lb as T,Va as o,db as c,ga as x,ib as l,mb as n,nb as a,ob as C,pb as p,qb as d,tc as g,vc as M,wb as y,wc as S}from"./chunk-BXMAV5CG.js";function j(t,e){t&1&&(n(0,"th",10),i(1,"Name"),a())}function k(t,e){if(t&1&&(n(0,"td",11),i(1),a()),t&2){let r=e.$implicit;o(1),_(" ",r.name," ")}}function q(t,e){t&1&&(n(0,"th",10),i(1,"Category"),a())}function G(t,e){if(t&1&&(n(0,"td",11)(1,"app-chip",12),i(2),a()()),t&2){let r=e.$implicit,m=y();o(1),c("color",m.getCategoryColor(r.personal_finance_category.detailed)),o(1),_(" ",m.humanizeCategory(r.personal_finance_category.detailed)," ")}}function J(t,e){t&1&&(n(0,"th",10),i(1,"Amount"),a())}function K(t,e){if(t&1&&(n(0,"td",11),i(1),h(2,"currency"),a()),t&2){let r=e.$implicit;o(1),u(T(2,1,r.amount))}}function L(t,e){t&1&&(n(0,"th",10),i(1,"Date"),a())}function Q(t,e){if(t&1&&(n(0,"td",11),i(1),h(2,"date"),a()),t&2){let r=e.$implicit;o(1),u(T(2,1,r.date))}}function U(t,e){t&1&&C(0,"tr",13)}function V(t,e){t&1&&C(0,"tr",14)}var at=(()=>{let e=class e{constructor(){this.transactions=v,this.displayedColumns=["name","personal-category","amount","date"]}getCategoryColor(m){return w(m)}humanizeCategory(m){return E(m)}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=x({type:e,selectors:[["app-transactions"]],standalone:!0,features:[D],decls:18,vars:3,consts:[[1,"transactions-container"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","personal-category"],["matColumnDef","amount"],["matColumnDef","date"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"color"],["mat-header-row",""],["mat-row",""]],template:function(s,f){s&1&&(n(0,"h1"),i(1,"Transactions"),a(),n(2,"div",0)(3,"table",1),p(4,2),l(5,j,2,0,"th",3)(6,k,2,1,"td",4),d(),p(7,5),l(8,q,2,0,"th",3)(9,G,3,2,"td",4),d(),p(10,6),l(11,J,2,0,"th",3)(12,K,3,3,"td",4),d(),p(13,7),l(14,L,2,0,"th",3)(15,Q,3,3,"td",4),d(),l(16,U,1,0,"tr",8)(17,V,1,0,"tr",9),a()()),s&2&&(o(3),c("dataSource",f.transactions),o(13),c("matHeaderRowDef",f.displayedColumns),o(1),c("matRowDefColumns",f.displayedColumns))},dependencies:[S,M,g,N,b,P,O,I,H,B,$,z,F,A,R],styles:["[_nghost-%COMP%]{padding:16px}[_nghost-%COMP%]   table[_ngcontent-%COMP%]{border:1px solid var(--border-color)}"]});let t=e;return t})();export{at as TransactionsComponent};
