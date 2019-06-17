(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,n){e.exports=n(92)},49:function(e,t,n){},54:function(e,t,n){},63:function(e,t,n){},86:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);n(49);var a=n(0),s=n.n(a),r=n(31),c=n.n(r),u=n(4),i=n(10),o=s.a.createContext(),l=function(e,t){switch(t.type){case"RESET_CHAT":return localStorage.removeItem("clientActiveQuestionId"),Object(i.a)({},e,{clientChat:null});case"SET_ACTIVE_CHAT":return localStorage.setItem("clientActiveQuestionId",t.payload),Object(i.a)({},e,{clientChat:{questionId:t.payload}});default:return e}},d=function(e){var t=e.children,n=Object(a.useReducer)(l,{clientChat:null}),r=Object(u.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)(function(){var e=localStorage.getItem("clientActiveQuestionId");e&&i({type:"SET_ACTIVE_CHAT",payload:e})},[]),s.a.createElement(o.Provider,{value:[c,i]},t)},m=(n(54),n(9)),b=n(7),v=n(8),f=n.n(v);function E(){var e=Object(b.a)(["\n  mutation CreateQuestionMutation($subject: String!, $authorName: String!, $authorEmail: String!) {\n    createQuestion(data: { \n      subject: $subject\n      authorName: $authorName\n      authorEmail: $authorEmail\n    }) {\n      id\n      subject\n      authorName\n      status\n    }\n  }\n"]);return E=function(){return e},e}var g=f()(E()),p=function(e){var t=e.createQuestion,n=e.loading,r=Object(a.useRef)(""),c=Object(a.useRef)(""),u=Object(a.useRef)(""),i=n;return s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({variables:{authorName:r.current.value,authorEmail:c.current.value,subject:u.current.value}})}},s.a.createElement("div",{className:"question-form__input-wrapper question-form__input-wrapper--question"},s.a.createElement("label",null,"Hvad vil du sp\xf8rge om?"),s.a.createElement("div",null,s.a.createElement("textarea",{disabled:i,rows:"5",ref:u}))),s.a.createElement("div",{className:"question-form__input-wrapper question-form__input-wrapper--name"},s.a.createElement("label",null,"Dit navn",s.a.createElement("div",null,s.a.createElement("input",{type:"text",disabled:i,ref:r,required:!0})))),s.a.createElement("div",{className:"question-form__input-wrapper question-form__input-wrapper--email"},s.a.createElement("label",null,"Din e-mail adresse",s.a.createElement("div",null,s.a.createElement("input",{type:"email",disabled:i,ref:c,required:!0})))),s.a.createElement("input",{type:"submit",value:"Sp\xf8rg nu"}))},_=function(){var e=Object(a.useContext)(o),t=Object(u.a)(e,2)[1];return s.a.createElement("div",{className:"question-form"},s.a.createElement(m.b,{mutation:g},function(e,n){var a=n.loading,r=n.data;return r&&r.createQuestion.id&&t({type:"SET_ACTIVE_CHAT",payload:r.createQuestion.id}),s.a.createElement(p,{createQuestion:e,loading:a})}))};n(63);function q(){var e=Object(b.a)(["\n  query QuestionQuery($questionId: ID!) {\n    question(questionId: $questionId) {\n      id\n      authorName\n      subject\n      createdAt\n      status\n      messages {\n        id\n        text\n        sentFrom\n        createdAt\n      }\n    }\n  }\n"]);return q=function(){return e},e}var j=f()(q());function O(){var e=Object(b.a)(["\n  mutation CreateMessageMutation($questionId: ID!, $sentFrom: String!, $text: String!) {\n    createMessage(questionId: $questionId, data: { text: $text, sentFrom: $sentFrom }) {\n      id\n      text\n      sentFrom\n      createdAt\n      question {\n        authorName\n      }\n    }\n  }\n"]);return O=function(){return e},e}var I=f()(O()),h=s.a.createContext(),y=function(e,t){switch(t.type){case"RESET_CHAT":return localStorage.removeItem("backendActiveQuestionId"),Object(i.a)({},e,{backendChat:null});case"SET_ACTIVE_CHAT":return localStorage.setItem("backendActiveQuestionId",t.payload),Object(i.a)({},e,{backendChat:{questionId:t.payload,message:""}});case"SET_CHAT_MESSAGE_TEXT":return Object(i.a)({},e,{backendChat:Object(i.a)({},e.backendChat,{message:t.payload})});default:return e}},S=function(e){var t=e.children,n=Object(a.useReducer)(y,{backendChat:null}),r=Object(u.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)(function(){var e=localStorage.getItem("backendActiveQuestionId");e&&i({type:"SET_ACTIVE_CHAT",payload:e})},[]),s.a.createElement(h.Provider,{value:[c,i]},t)},T=s.a.createContext(),N=function(e,t){switch(t.type){case"RESET_SETTINGS":return localStorage.removeItem("clientSettings"),{};case"SET_SETTINGS":return localStorage.setItem("clientSettings",JSON.stringify(t.payload)),Object(i.a)({},t.payload,{messages:JSON.parse(t.payload.messages),standardAnswers:JSON.parse(t.payload.standardAnswers)});default:return e}},C=function(e){var t=e.children,n=Object(a.useReducer)(N,{}),r=Object(u.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)(function(){var e=localStorage.getItem("clientSettings");e&&i({type:"SET_SETTINGS",payload:JSON.parse(e)})},[]),s.a.createElement(T.Provider,{value:[c,i]},t)},A=function(e){var t=e.status,n=Object(a.useContext)(T),r=Object(u.a)(n,1)[0];return"pending"===t?s.a.createElement("div",{className:"client-status-bar client-status-bar--".concat(t)},r.messages.chatPending):""},k=n(16);function x(){var e=Object(b.a)(["\n  subscription NewMessageSubscription($questionId: ID!) {\n    newMessage(questionId: $questionId) {\n      id\n      text\n      sentFrom\n      createdAt\n      question {\n        authorName\n      }\n    }\n  }\n"]);return x=function(){return e},e}var w=f()(x());function Q(){var e=Object(b.a)(["\n  subscription QuestionClosedSubscription($questionId: ID!) {\n    questionClosed(questionId: $questionId) {\n      id\n      subject\n      authorName\n      createdAt\n      messages {\n        id\n        text\n        sentFrom\n        createdAt\n      }\n    }\n  }\n"]);return Q=function(){return e},e}var $=f()(Q());function D(){var e=Object(b.a)(["\n  subscription QuestionAssignedSubscription($questionId: ID) {\n    questionAssigned(questionId: $questionId) {\n      status\n    }\n  }\n"]);return D=function(){return e},e}var M=f()(D());function R(){var e=Object(b.a)(["\n  subscription QuestionReopenedSubscription($questionId: ID) {\n    questionReopened(questionId: $questionId) {\n      id\n      status\n      consultant\n      subject\n      authorName\n      createdAt\n    }\n  }\n"]);return R=function(){return e},e}var H=f()(R()),F=function(e){return new Date(1e3*e)},V=n(42),G=n.n(V),J=n(43),B=n.n(J),P=function(e){var t=B()(e,{locale:G.a});return"For ".concat(t," siden")},X=function(e){var t=e.sentFrom,n=e.text,r=e.createdAt,c=F(r),i=Object(a.useState)(P(c)),o=Object(u.a)(i,2),l=o[0],d=o[1];return Object(a.useEffect)(function(){var e=setInterval(function(){d(P(c))},3e4);return function(){return clearInterval(e)}}),s.a.createElement("div",{className:"client-message client-message--".concat(t)},s.a.createElement("div",{className:"client-message__box"},s.a.createElement("div",{className:"client-message__text"},n)),"system"===t?"":s.a.createElement("div",{className:"client-message__created-at"},l))},L=function(e){if(0===e.length)return!1;var t=e.scrollHeight;e.scrollTop=t},K=function(e){var t=e.disabled,n=e.subject,r=e.questionCreatedAt,c=e.messages,l=e.subscribeToMore,d=Object(a.useContext)(o),m=Object(u.a)(d,2),b=m[0],v=m[1];Object(a.useEffect)(function(){l({document:w,variables:{questionId:b.clientChat.questionId},updateQuery:function(e,t){var n=t.subscriptionData;if(!n.data)return e;var a=Object.assign({},e,Object(i.a)({},e,{question:Object(i.a)({},e.question,{messages:[n.data.newMessage]})}));return e.question.messages&&(a.question.messages=[].concat(Object(k.a)(e.question.messages),[n.data.newMessage])),a}}),l({document:M,variables:{questionId:b.clientChat.questionId},updateQuery:function(e,t){var n=t.subscriptionData;return n.data?Object.assign({},e,Object(i.a)({},e,{question:Object(i.a)({},e.question,n.data.questionAssigned)})):e}}),l({document:$,variables:{questionId:b.clientChat.questionId},updateQuery:function(e,t){return t.subscriptionData.data?(v({type:"RESET_CHAT",payload:null}),Object.assign({},e,Object(i.a)({},e,{question:null}))):e}}),l({document:H,variables:{questionId:b.clientChat.questionId},updateQuery:function(e,t){var n=t.subscriptionData;return n.data?Object.assign({},e,Object(i.a)({},e,{question:Object(i.a)({},e.question,n.data.questionReopened)})):e}})},[]),Object(a.useEffect)(function(){L(document.querySelector(".client-messages"))});return s.a.createElement("div",{className:t?"client-messages client-messages--disabled":"client-messages"},function(){if(t)return s.a.createElement("div",{className:"loading"},s.a.createElement("div",null),s.a.createElement("div",null))}(),s.a.createElement(X,{text:n,createdAt:r,sentFrom:"user"}),c.map(function(e,t){return s.a.createElement("div",{key:"client-message-".concat(t,"-").concat(e.id)},s.a.createElement(X,{text:e.text,createdAt:e.createdAt,sentFrom:e.sentFrom}))}))},z=function(e){var t=e.createMessage,n=e.disabled,r=Object(a.useContext)(o),c=Object(u.a)(r,1)[0],i=Object(a.useRef)(null);return s.a.createElement("div",{className:"client-form"},s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({variables:{questionId:c.clientChat.questionId,text:i.current.value,sentFrom:"user"}}),i.current.value=""}},s.a.createElement("input",{type:"text",placeholder:"Skriv en besked ...",required:!0,ref:i,disabled:n})))},U=function(){var e=Object(a.useContext)(o),t=Object(u.a)(e,2),n=t[0],r=t[1];return s.a.createElement(m.c,{query:j,variables:{questionId:n.clientChat.questionId}},function(e){var t=e.data,n=e.loading,a=e.subscribeToMore;if(!t||n)return"";var c=t.question.status,u="pending"===c||"complete"===c;return"complete"===t.question.status&&r({type:"RESET_CHAT",payload:null}),s.a.createElement("div",{className:"client-chat"},s.a.createElement(A,{status:t.question.status}),s.a.createElement(K,{disabled:u,subject:t.question.subject,questionCreatedAt:t.question.createdAt,messages:t.question.messages,subscribeToMore:a}),s.a.createElement(m.b,{mutation:I},function(e){return s.a.createElement(z,{disabled:u,createMessage:e})}))})},W=function(){var e=Object(a.useContext)(o);return Object(u.a)(e,1)[0].clientChat?s.a.createElement(U,null):s.a.createElement(_,null)},Y=n(19),Z=n(45),ee=n(14),te=n(46),ne=n(44),ae=n(2),se=new te.a({uri:"http://localhost:4300/graphql"}),re=new ne.a({uri:"ws://localhost:4300/graphql",options:{reconnect:!0}}),ce=Object(ee.d)(function(e){var t=e.query,n=Object(ae.l)(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation},re,se),ue=new Z.a,ie=new Y.c({link:ce,cache:ue}),oe=function(e){var t=e.children;return s.a.createElement(m.a,{client:ie},t)},le=function(e){var t=e.children;return s.a.createElement(C,null,s.a.createElement(d,null,t))};function de(){var e=Object(b.a)(["\n  query {\n    settings {\n      messages\n      standardAnswers\n    }\n  }\n"]);return de=function(){return e},e}var me=f()(de()),be=function(e){var t=e.children,n=e.data,s=e.loading,r=Object(a.useContext)(T),c=Object(u.a)(r,2)[1];return Object(a.useEffect)(function(){n&&!s&&c({type:"SET_SETTINGS",payload:n.settings})},[]),t},ve=function(e){var t=e.children;return s.a.createElement(m.c,{query:me},function(e){var n=e.data,a=e.loading;return!n||a?t:s.a.createElement(be,{data:n,loading:a},t)})},fe=function(){return s.a.createElement(oe,null,s.a.createElement(le,null,s.a.createElement(ve,null,s.a.createElement(W,null))))};n(86);function Ee(){var e=Object(b.a)(["\n  query QuestionsQuery($statusType: String!, $consultantId: ID) {\n    questions(statusType: $statusType, consultantId: $consultantId) {\n      id\n      subject\n      authorName\n      createdAt\n    }\n  }\n"]);return Ee=function(){return e},e}var ge=f()(Ee());function pe(){var e=Object(b.a)(["\n  subscription NewQuestionSubscription($statusType: String!) {\n    newQuestion(statusType: $statusType) {\n      id\n      subject\n      authorName\n      createdAt\n    }\n  }\n"]);return pe=function(){return e},e}var _e=f()(pe());function qe(){var e=Object(b.a)(["\n  subscription QuestionAssignedToConsultantSubscription($consultantId: ID) {\n    questionAssignedToConsultant(consultantId: $consultantId) {\n      id\n      subject\n      authorName\n      createdAt\n    }\n  }\n"]);return qe=function(){return e},e}var je=f()(qe()),Oe=n(36),Ie=n.n(Oe);function he(){var e=Object(b.a)(["\n  mutation AssignQuestionMutation($questionId: ID!, $consultantId: ID!) {\n    assignQuestion(questionId: $questionId, consultantId: $consultantId) {\n      id\n      subject\n      authorName\n      createdAt\n    }\n  }\n"]);return he=function(){return e},e}var ye=f()(he()),Se=function(e){var t=e.canAssign,n=e.canSetActive,r=e.questionId,c=e.heading,i=e.text,o=e.createdAt,l=F(o),d=Object(a.useState)(P(l)),b=Object(u.a)(d,2),v=b[0],f=b[1],E=Object(a.useContext)(h),g=Object(u.a)(E,2)[1];Object(a.useEffect)(function(){var e=setInterval(function(){f(P(l))},3e4);return function(){return clearInterval(e)}});return s.a.createElement(m.b,{mutation:ye},function(e){return s.a.createElement("div",{className:"question question--teaser",onClick:function(){var a;t&&(a=e,window.confirm("Vil du overtage dette sp\xf8rgsm\xe5l?")&&a({variables:{questionId:r,consultantId:"666"}})),n&&g({type:"SET_ACTIVE_CHAT",payload:r})}},s.a.createElement("div",{className:"question__heading"},s.a.createElement("div",{className:"question__heading__title"},Ie()(c,32))),s.a.createElement("div",{className:"question__body"},Ie()(i,35)),s.a.createElement("small",{className:"question__created-at"},v))})},Te=function(e){var t=e.canAssign,n=e.canSetActive,r=e.title,c=e.questions,u=e.subscriptions;Object(a.useEffect)(function(){for(var e=0;e<u.length;e++)u[e]()},[]);return s.a.createElement("div",{className:"backend-list"},s.a.createElement("div",{className:"backend-list__heading"},s.a.createElement("h4",{className:"backend-list__heading__title"},r)),s.a.createElement("div",{className:"backend-list__body"},0===c.length?s.a.createElement("div",{className:"backend-list__item backend-list__item--no-result"},"Ingen samtaler at vise."):c.map(function(e){return s.a.createElement("div",{className:"backend-list__item",key:"question-".concat(e.id)},s.a.createElement(Se,{questionId:e.id,heading:e.authorName,text:e.subject,createdAt:e.createdAt,canAssign:t,canSetActive:n}))})))},Ne=function(){var e=[];return s.a.createElement(m.c,{query:ge,variables:{consultantId:null,statusType:"pending"}},function(t){var n=t.loading,a=t.data,r=t.subscribeToMore;return a?n?"Henter...":(e.push(function(){return r({document:_e,variables:{consultantId:null,statusType:"pending"},updateQuery:function(e,t){var n=t.subscriptionData;if(!n.data)return e;var a=n.data.newQuestion;return Object.assign({},e,{questions:[].concat(Object(k.a)(e.questions),[a])})}})}),e.push(function(){return r({document:je,updateQuery:function(e,t){var n=t.subscriptionData;if(!n.data)return e;var a=n.data.questionAssignedToConsultant,s=e.questions.filter(function(e){return e.id!==a.id});return Object.assign({},e,{questions:s})}})}),e.push(function(){return r({document:H,updateQuery:function(e,t){var n=t.subscriptionData;if(!n.data)return e;var a=n.data.questionReopened,s=e.questions.filter(function(e){return e.id!==a.id});return s.push(a),Object.assign({},e,{questions:s})}})}),s.a.createElement(Te,{title:"Tilg\xe6ngelige sp\xf8rgsm\xe5l",questions:a.questions,subscriptions:e,canAssign:!0,canSetActive:!1})):""})};function Ce(){var e=Object(b.a)(["\n  subscription AssignedQuestionClosedSubscription($consultantId: ID!) {\n    assignedQuestionClosed(consultantId: $consultantId) {\n      id\n      subject\n      authorName\n      createdAt\n    }\n  }\n"]);return Ce=function(){return e},e}var Ae=f()(Ce()),ke=function(){var e=[];return s.a.createElement(m.c,{query:ge,variables:{statusType:"assigned",consultantId:"666"}},function(t){var n=t.loading,a=t.data,r=t.subscribeToMore;return a?n?"Henter...":(e.push(function(){return r({document:je,variables:{consultantId:"666"},updateQuery:function(e,t){var n=t.subscriptionData;if(!n.data)return e;var a=n.data.questionAssignedToConsultant;return Object.assign({},e,{questions:[].concat(Object(k.a)(e.questions),[a])})}})}),e.push(function(){return r({document:Ae,variables:{consultantId:"666"},updateQuery:function(e,t){var n=t.subscriptionData;if(!n.data)return e;var a=n.data.assignedQuestionClosed,s=e.questions.filter(function(e){return e.id!==a.id});return Object.assign({},e,{questions:s})}})}),e.push(function(){return r({document:H,updateQuery:function(e,t){var n=t.subscriptionData;if(!n.data)return e;var a=n.data.questionReopened,s=e.questions.filter(function(e){return e.id!==a.id});return Object.assign({},e,{questions:s})}})}),s.a.createElement(Te,{title:"Tildelte sp\xf8rgsm\xe5l",questions:a.questions,subscriptions:e,canAssign:!1,canSetActive:!0,subscribeToMore:r})):""})},xe=function(){return s.a.createElement("div",{className:"backend-sidebar"},s.a.createElement(Ne,null),s.a.createElement(ke,null))},we=(n(91),function(e){var t=e.title,n=Object(a.useContext)(h),r=Object(u.a)(n,2)[1];return s.a.createElement("div",{className:"backend-bar"},s.a.createElement("div",{className:"backend-bar__heading"},s.a.createElement("h4",{className:"backend-bar__heading__title"},t)),s.a.createElement("div",{className:"backend-bar__spacer"}),s.a.createElement("span",{className:"backend-bar__button bar__button--close",onClick:function(){r({type:"RESET_CHAT",payload:null})},title:"Klik for at lukke"},"X"))}),Qe=function(e){var t=e.sentFrom,n=e.text,r=e.createdAt,c=F(r),i=Object(a.useState)(P(c)),o=Object(u.a)(i,2),l=o[0],d=o[1];return Object(a.useEffect)(function(){var e=setInterval(function(){d(P(c))},3e4);return function(){return clearInterval(e)}}),s.a.createElement("div",{className:"backend-message backend-message--".concat(t)},s.a.createElement("div",{className:"backend-message__box"},s.a.createElement("div",{className:"backend-message__text"},n)),"system"===t?"":s.a.createElement("div",{className:"backend-message__created-at"},l))},$e=function(e){var t=e.subject,n=e.questionCreatedAt,r=e.messages,c=e.subscribeToMore,o=Object(a.useContext)(h),l=Object(u.a)(o,1)[0];Object(a.useEffect)(function(){c({document:w,variables:{questionId:l.backendChat.questionId},updateQuery:function(e,t){var n=t.subscriptionData;return n.data?Object.assign({},e,Object(i.a)({},e,{question:Object(i.a)({},e.question,{messages:[].concat(Object(k.a)(e.question.messages),[n.data.newMessage])})})):e}})},[]),Object(a.useEffect)(function(){L(document.querySelector(".backend-chat__messages"))});return s.a.createElement("div",{className:"backend-chat__messages"},s.a.createElement(Qe,{text:t,createdAt:n,sentFrom:"user"}),r.map(function(e,t){return s.a.createElement("div",{key:"backend-message-".concat(t,"-").concat(e.id)},s.a.createElement(Qe,{text:e.text,createdAt:e.createdAt,sentFrom:e.sentFrom}))}))};function De(){var e=Object(b.a)(["\n  mutation CloseQuestionMutation($questionId: ID!, $reason: String!) {\n    closeQuestion(questionId: $questionId, reason: $reason) {\n      id\n      subject\n      authorName\n      createdAt\n      messages {\n        id\n        text\n        sentFrom\n        createdAt\n      }\n    }\n  }\n"]);return De=function(){return e},e}var Me=f()(De());function Re(){var e=Object(b.a)(["\n  mutation ReopenQuestionMutation($questionId: ID!) {\n    reopenQuestion(questionId: $questionId) {\n      id\n    }\n  }\n"]);return Re=function(){return e},e}var He=f()(Re()),Fe=function(e){var t=e.children,n=e.title,a=e.toggle,r=e.visible;return s.a.createElement("div",{className:"overlay ".concat(r?"overlay--visible":"")},s.a.createElement("div",{className:"modal"},s.a.createElement("div",{className:"modal__heading"},s.a.createElement("h1",{className:"modal__heading__title"},n)),s.a.createElement("div",{className:"modal__body"},t),s.a.createElement("div",{className:"modal__footer"},s.a.createElement("button",{className:"modal__footer__button",onClick:function(){return a(!r)}},"Luk vindue"))))},Ve=function(e){var t=e.closeQuestion,n=e.confirmText,r=e.text,c=e.reason,i=e.data,o=e.loading,l=Object(a.useContext)(h),d=Object(u.a)(l,2),m=d[0],b=d[1];!o&&i&&i.closeQuestion.id&&b({type:"RESET_CHAT",payload:null});var v=function(e){e.preventDefault(),window.confirm(n)&&t({variables:{reason:c,questionId:m.backendChat.questionId}})};return o?s.a.createElement("button",{className:"backend-chat__button backend-chat__button--close-question",onClick:v,disabled:!0},"Vent venligst..."):s.a.createElement("button",{className:"backend-chat__button backend-chat__button--close-question",onClick:v},r)},Ge=function(e){var t=e.reopenQuestion,n=Object(a.useContext)(h),r=Object(u.a)(n,2),c=r[0],i=r[1];return s.a.createElement("button",{className:"backend-chat__button backend-chat__button--reopen-question",onClick:function(e){e.preventDefault(),window.confirm("Vil du gen\xe5bne dette sp\xf8rgsm\xe5l?")&&(t({variables:{questionId:c.backendChat.questionId}}),i({type:"RESET_CHAT",payload:null}))}},"Gen\xe5bn sp\xf8rgsm\xe5l")},Je=s.a.createContext(),Be=function(e,t){switch(t.type){case"RESET_SETTINGS":return localStorage.removeItem("backendSettings"),{};case"SET_SETTINGS":return localStorage.setItem("backendSettings",JSON.stringify(t.payload)),Object(i.a)({},t.payload,{messages:JSON.parse(t.payload.messages),standardAnswers:JSON.parse(t.payload.standardAnswers)});default:return e}},Pe=function(e){var t=e.children,n=Object(a.useReducer)(Be,{messages:null,standardAnswers:null}),r=Object(u.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)(function(){var e=localStorage.getItem("backendSettings");e&&i({type:"SET_SETTINGS",payload:JSON.parse(e)})},[]),s.a.createElement(Je.Provider,{value:[c,i]},t)},Xe=function(e){var t=e.modalToggle,n=e.modalVisible,r=Object(a.useContext)(Je),c=Object(u.a)(r,1)[0],i=Object(a.useContext)(h),o=Object(u.a)(i,2)[1],l=c.standardAnswers,d=Object.keys(l).map(function(e,a){var r=e,c=l[e],u=Object.keys(c).map(function(e,a){var r=e,u=c[e];return s.a.createElement("div",{className:"standard-answer",key:"answer-item-".concat(e,"-").concat(a),onClick:function(){return function(e){o({type:"SET_CHAT_MESSAGE_TEXT",payload:e}),t(!n)}(u)}},s.a.createElement("div",{className:"standard-answer__heading"},s.a.createElement("h4",{className:"standard-answer__heading__title"},r)),s.a.createElement("div",{className:"standard-answer__text"},u))});return s.a.createElement("div",{className:"standard-answer-list__item",key:"answer-".concat(e,"-").concat(a)},s.a.createElement("div",{className:"standard-answer-list__item__heading"},s.a.createElement("h3",{className:"standard-answer-list__item__heading__title"},r)),s.a.createElement("div",{className:"standard-answer-list__item__content"},u))});return s.a.createElement("div",{className:"standard-answer-list"},d)},Le=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(u.a)(c,2),o=i[0],l=i[1],d=function(e){l(!1),r(e)},b=function(e){r(!1),l(e)};return s.a.createElement("div",{className:"backend-chat__actions"},s.a.createElement("div",{className:"button-list"},s.a.createElement("div",{className:"button-list__item"},s.a.createElement(Fe,{toggle:d,visible:n,title:"Standard svar"},s.a.createElement(Xe,{modalToggle:d,modalVisible:n})),s.a.createElement("button",{className:"backend-chat__button",onClick:function(){return d(!n)}},"Standard svar")),s.a.createElement("div",{className:"button-list__item"},s.a.createElement("button",{className:"backend-chat__button",onClick:function(){return b(!o)}},"Afslut samtale"),s.a.createElement(Fe,{toggle:b,visible:o,title:"Afslut samtalen"},s.a.createElement("div",{className:"button-list"},s.a.createElement("div",{className:"button-list__item"},s.a.createElement(m.b,{mutation:He},function(e){return s.a.createElement(Ge,{reopenQuestion:e})})),s.a.createElement("div",{className:"button-list__item"},s.a.createElement(m.b,{mutation:Me},function(e,t){var n=t.loading,a=t.data;return s.a.createElement(Ve,{text:"Luk grundet spam",confirmText:"Vil du lukke dette sp\xf8rgsm\xe5l og markere sp\xf8rgsm\xe5let som spam?",reason:"spam",closeQuestion:e,loading:n,data:a})})),s.a.createElement("div",{className:"button-list__item"},s.a.createElement(m.b,{mutation:Me},function(e,t){var n=t.loading,a=t.data;return s.a.createElement(Ve,{text:"Luk som besvaret",confirmText:"Vil du lukke dette sp\xf8rgsm\xe5l og markere sp\xf8rgsm\xe5let som besvaret?",reason:"answered",closeQuestion:e,loading:n,data:a})})),s.a.createElement("div",{className:"button-list__item"},s.a.createElement(m.b,{mutation:Me},function(e,t){var n=t.loading,a=t.data;return s.a.createElement(Ve,{text:"Besvar senere",confirmText:"Vil du gemme denne chat og besvare den senere, som et sp\xf8rgsm\xe5l?",reason:"later",closeQuestion:e,loading:n,data:a})})))))))},Ke=function(e){var t=e.createMessage,n=Object(a.useContext)(h),r=Object(u.a)(n,2),c=r[0],i=r[1];return s.a.createElement("div",{className:"backend-form"},s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({variables:{questionId:c.backendChat.questionId,text:c.backendChat.message,sentFrom:"admin"}}),i({type:"SET_CHAT_MESSAGE_TEXT",payload:""})}},s.a.createElement("input",{type:"text",placeholder:"Skriv en besked ...",required:!0,value:c.backendChat.message,onChange:function(e){i({type:"SET_CHAT_MESSAGE_TEXT",payload:e.target.value})}})))},ze=function(){var e=Object(a.useContext)(h),t=Object(u.a)(e,2),n=t[0],r=t[1];return s.a.createElement(m.c,{query:j,variables:{questionId:n.backendChat.questionId}},function(e){var t=e.data,n=e.loading,a=e.subscribeToMore;return t&&t.question&&!n?("complete"===t.question.status&&r({type:"RESET_CHAT",payload:null}),s.a.createElement("div",{className:"backend-chat"},s.a.createElement(we,{title:t.question.authorName}),s.a.createElement($e,{subject:t.question.subject,questionCreatedAt:t.question.createdAt,messages:t.question.messages,subscribeToMore:a}),s.a.createElement(Le,null),s.a.createElement(m.b,{mutation:I},function(e){return s.a.createElement(Ke,{createMessage:e})}))):""})},Ue=function(){var e=Object(a.useContext)(h),t=Object(u.a)(e,1)[0].backendChat?s.a.createElement(ze,null):"";return s.a.createElement(a.Fragment,null,s.a.createElement(xe,null),t)},We=function(e){var t=e.children;return s.a.createElement(Pe,null,s.a.createElement(S,null,t))},Ye=function(e){var t=e.children,n=e.data,s=e.loading,r=Object(a.useContext)(Je),c=Object(u.a)(r,2)[1];return Object(a.useEffect)(function(){n&&!s&&c({type:"SET_SETTINGS",payload:n.settings})},[]),t},Ze=function(e){var t=e.children;return s.a.createElement(m.c,{query:me},function(e){var n=e.data,a=e.loading;return!n||a?t:s.a.createElement(Ye,{data:n,loading:a},t)})},et=function(){return s.a.createElement(oe,null,s.a.createElement(We,null,s.a.createElement(Ze,null,s.a.createElement(Ue,null))))};document.getElementById("chatty_client")&&c.a.render(s.a.createElement(fe,null),document.getElementById("chatty_client")),document.getElementById("chatty_backend")&&c.a.render(s.a.createElement(et,null),document.getElementById("chatty_backend"))}},[[48,1,2]]]);