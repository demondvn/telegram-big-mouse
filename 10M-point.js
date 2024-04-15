"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[13], {
    6013: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return Clicker_Clicker
            }
        });
        var l = n(85893)
          , r = n(67294)
          , a = n(25675)
          , o = n.n(a)
          , i = n(50549)
          , c = n(88767)
          , s = n(45007)
          , u = n(35062)
          , d = {
            src: "/_next/static/media/arrow.708ed69e.png",
            height: 16,
            width: 16,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX///////////////////////9MaXH////////////fxkXjAAAACnRSTlM5WjMIJUUAySHMf9YVgAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJw9i0EKACAMw9Juc/r/D4uI9hRIyohpMgZhyUWQqOVKKGuJM6sPJHXVj999AxlhALQGBilLAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        }
          , p = n(82729)
          , g = n(88095);
        function _templateObject() {
            let e = (0,
            p._)(["\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    justify-content: center;\n    width: 100%;\n"]);
            return _templateObject = function() {
                return e
            }
            ,
            e
        }
        function _templateObject1() {
            let e = (0,
            p._)(["\n    color: var(--yellow-color);\n    font-size: 16px;\n    font-weight: 500;\n"]);
            return _templateObject1 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject2() {
            let e = (0,
            p._)(["\n    position: relative;\n    width: 100%;\n    height: 10px;\n    background: var(--ocean-color);\n    border-radius: 100px;\n"]);
            return _templateObject2 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject3() {
            let e = (0,
            p._)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: ", "%;\n    background: linear-gradient(90deg, #FFE950FF,\n    #FF6158FF,\n    #48FD5AFF,\n    #FFBF42FF,\n    #FF7C33FF);\n    height: 100%;\n    transition: all .3s;\n    border-radius: 100px;\n"]);
            return _templateObject3 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject4() {
            let e = (0,
            p._)(["\n    width: 32px;\n    height: 32px;\n    position: absolute;\n    top: 0%;\n    transform: translateY(-35%) translateX(-50%); \n    left: ", "%;\n"]);
            return _templateObject4 = function() {
                return e
            }
            ,
            e
        }
        let m = g.ZP.div(_templateObject())
          , f = g.ZP.div(_templateObject1())
          , h = g.ZP.div(_templateObject2())
          , b = g.ZP.div(_templateObject3(), e=>Math.max(100 * e.width, 0))
          , A = (0,
        g.ZP)(o())(_templateObject4(), e=>Math.max(100 * e.left, 0))
          , ProgressBar = e=>{
            let {total: t, count: n, fruit: r} = e;
            return (0,
            l.jsxs)(m, {
                children: [(0,
                l.jsx)(f, {
                    children: t - n
                }), (0,
                l.jsxs)(h, {
                    children: [(0,
                    l.jsx)(b, {
                        width: (t - n) / t
                    }), (0,
                    l.jsx)(A, {
                        alt: "fruit",
                        height: 50,
                        left: (t - n) / t,
                        src: r,
                        width: 50
                    })]
                })]
            })
        }
        ;
        var x = n(24195);
        function style_templateObject() {
            let e = (0,
            p._)(["\n  transform: scale(1);\n  transition: transform 0.1s ease-in-out;\n  user-drag: none;\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  background-color: transparent;\n  border: none;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n\n  &:active {\n    transform: scale(0.98);\n  }\n"]);
            return style_templateObject = function() {
                return e
            }
            ,
            e
        }
        let j = g.ZP.button(style_templateObject())
          , _ = (0,
        r.memo)(e=>{
            let {children: t, onClick: n} = e;
            return (0,
            l.jsx)(j, {
                onClick: e=>{
                    e.preventDefault(),
                    null == n || n(e)
                }
                ,
                type: "button",
                children: t
            })
        }
        )
          , getRandomArrayElement = e=>{
            let t = Math.round(Math.random() * (e.length - 1));
            return e[t]
        }
        ;
        var v = n(36521);
        function IconWithEffects_style_templateObject() {
            let e = (0,
            p._)(["\n  position: fixed;\n  z-index: 99;\n  pointer-events: none;\n"]);
            return IconWithEffects_style_templateObject = function() {
                return e
            }
            ,
            e
        }
        let w = (0,
        g.zo)(v.E.div)(IconWithEffects_style_templateObject())
          , IconWithEffects = e=>{
            let {children: t, randomEffects: n=[], effectsOnEveryClick: a=[], onClick: o, isActive: i} = e
              , [c,s] = (0,
            r.useState)([])
              , getEffect = (e,t,n)=>{
                let r = Date.now() + e.time;
                s(a=>[...a, {
                    exitTime: r,
                    node: (0,
                    l.jsx)(w, {
                        ...e.effect(t, n),
                        children: e.children()
                    }, Math.random())
                }])
            }
              , u = (0,
            r.useCallback)(e=>{
                if (i) {
                    if (n.length > 0) {
                        let t = getRandomArrayElement(n);
                        getEffect(t, e.clientX, e.clientY)
                    }
                    a.length > 0 && a.forEach(t=>{
                        getEffect(t, e.clientX, e.clientY)
                    }
                    ),
                    null == o || o(e)
                }
            }
            , [n, a, o, i]);
            return (0,
            r.useEffect)(()=>{
                let e = setInterval(()=>{
                    let e = Date.now();
                    s(t=>t.filter(t=>t.exitTime > e))
                }
                , 500);
                return ()=>{
                    clearInterval(e)
                }
            }
            , []),
            (0,
            r.useEffect)(()=>()=>{
                s([])
            }
            , []),
            (0,
            l.jsxs)(l.Fragment, {
                children: [c.map(e=>e.node), (0,
                l.jsx)(_, {
                    onClick: u,
                    children: t
                })]
            })
        }
        ;
        var y = n(70856)
          , O = n(90863)
          , k = n(30185)
          , S = n(52023)
          , E = n(41634)
          , C = n(19119)
          , M = n(61154);
        let selectSelf = e=>e[M.AM]
          , I = (0,
        C.P1)(selectSelf, e=>e.used)
          , P = (0,
        C.P1)(selectSelf, e=>e.total);
        var F = n(58931);
        let R = (0,
        C.P1)(e=>e[F.N7], e=>e);
        var Z = n(45484)
          , z = n(98490)
          , B = n(85126)
          , L = n(79698);
        let getRandomInt = (e,t)=>(e = Math.ceil(e),
        Math.floor(Math.random() * ((t = Math.floor(t)) - e + 1)) + e);
        var U = n(41664)
          , D = n.n(U)
          , V = n(36418);
        function Clicker_style_templateObject() {
            let e = (0,
            p._)(["\n  width: 100%;\n  min-height: 100vh;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: ", ";\n  background-color: var(--sea-color);\n  background-position: ", ";\n  background-repeat: no-repeat;\n  transition: all 0.3s;\n  background-size: 100% auto;\n  padding-top: 40px;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  padding-bottom: 120px;\n  box-sizing: border-box;\n  transition: all 0.3s;\n"]);
            return Clicker_style_templateObject = function() {
                return e
            }
            ,
            e
        }
        function style_templateObject1() {
            let e = (0,
            p._)(["\n  font-size: 30px;\n"]);
            return style_templateObject1 = function() {
                return e
            }
            ,
            e
        }
        function style_templateObject2() {
            let e = (0,
            p._)(["\n  width: 218px;\n  height: 282px;\n"]);
            return style_templateObject2 = function() {
                return e
            }
            ,
            e
        }
        function style_templateObject3() {
            let e = (0,
            p._)(["\n  color: white;\n  font-weight: 700;\n  font-size: 22px;\n"]);
            return style_templateObject3 = function() {
                return e
            }
            ,
            e
        }
        function style_templateObject4() {
            let e = (0,
            p._)(["\n  user-drag: none;\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  width: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  &::selection {\n    background-color: transparent;\n  }\n  &::-moz-selection {\n    background-color: transparent;\n  }\n"]);
            return style_templateObject4 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject5() {
            let e = (0,
            p._)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);
            return _templateObject5 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject6() {
            let e = (0,
            p._)(["\n  font-size: 48px;\n  color: var(--white-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  span {\n    font-weight: 600;\n    -webkit-text-stroke: 1px #030f1c;\n  }\n  & img {\n    width: 40px;\n    height: 40px;\n  }\n"]);
            return _templateObject6 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject7() {
            let e = (0,
            p._)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  padding: 24px;\n  gap: 34px;\n"]);
            return _templateObject7 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject8() {
            let e = (0,
            p._)(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--white-color);\n  margin-top: 8px;\n  text-decoration: none;\n"]);
            return _templateObject8 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject9() {
            let e = (0,
            p._)(["\n  height: 450px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-direction: column;\n"]);
            return _templateObject9 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject10() {
            let e = (0,
            p._)(["\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--white-color);\n  text-align: center;\n"]);
            return _templateObject10 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject11() {
            let e = (0,
            p._)(["\n  width: 246px;\n  height: 282px;\n  background: url(", ");\n  background-size: contain;\n  margin: 0 auto;\n  background-repeat: no-repeat;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  &::selection {\n    background-color: transparent;\n  }\n  &::-moz-selection {\n    background-color: transparent;\n  }\n"]);
            return _templateObject11 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject12() {
            let e = (0,
            p._)(["\n  max-width: 140px;\n  background-color: var(--white-color);\n  color: #000;\n  padding: 12px 24px;\n  margin: -12px 0 12px 0;\n  font-weight: 800;\n"]);
            return _templateObject12 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject13() {
            let e = (0,
            p._)(["\n  position: absolute;\n  top: 100px;\n  left: 100px;\n  cursor: pointer;\n"]);
            return _templateObject13 = function() {
                return e
            }
            ,
            e
        }
        let N = g.ZP.div(Clicker_style_templateObject(), e=>e.background, e=>e.backgroundPosition);
        g.ZP.div(style_templateObject1());
        let W = g.ZP.div(style_templateObject2())
          , T = g.ZP.p(style_templateObject3());
        (0,
        g.ZP)(o())(style_templateObject4());
        let H = g.ZP.div(_templateObject5())
          , X = g.ZP.div(_templateObject6())
          , J = g.ZP.div(_templateObject7())
          , Q = (0,
        g.ZP)(D())(_templateObject8());
        g.ZP.div(_templateObject9()),
        g.ZP.p(_templateObject10());
        let G = g.ZP.div(_templateObject11(), e=>e.bg)
          , q = (0,
        g.ZP)(V.z)(_templateObject12());
        g.ZP.div(_templateObject13());
        var Y = n(60387)
          , K = n(54005)
          , $ = n(84714);
        let ee = [(0,
        l.jsx)(o(), {
            alt: "lemon",
            height: 50,
            src: {
                src: "/_next/static/media/lemon.873e6a8f.png",
                height: 25,
                width: 24,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEWEdin/8Xa9lB/vxDNXhjhaeibLwUf74U68mDpGciLRqSaxjSO0jTfXnypMdhp/fFdFFxfut1f/8VGwnh7qxlVWZhnxyVq+kindtS3wyTTYomzWoV3ltWCvhTHZr1HEnD/62157nTVmmUL/3Dl1pVXVqyL2zjSCLjyLAAAAIHRSTlMB/fv+jcb8/FIm+v5C7oVMCz36+97J7en4/CETimezmS5QMf8AAAAJcEhZcwAACxMAAAsTAQCanBgAAABESURBVHicBcEFAoAgAACxA1FC7G7M/z/RDbBdXJRA1QadKJh7IerkyVmD1ndzxezR9EXyVBzOjW9mLD5N5WAA/GYW4Ad7VgNj3ReZbgAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            },
            width: 50
        }), (0,
        l.jsx)(o(), {
            alt: "pear",
            height: 50,
            src: K.Z,
            width: 50
        }), (0,
        l.jsx)(o(), {
            alt: "banana",
            height: 50,
            src: Y.Z,
            width: 50
        }), (0,
        l.jsx)(o(), {
            alt: "carrot",
            height: 50,
            src: {
                src: "/_next/static/media/carrot.11ba6bd8.png",
                height: 33,
                width: 33,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEVMaXHfZSv6ehzZXijTVCM+kB/6gCKbTkL5eyraVR3WXy7/cRudci4xciskbiY/ghBipAxdrRszhiNdkBn/hi45jCA8k8/2AAAAFHRSTlMAWGywv5WzD/ctfS+DqYtMPqZyHugH9EgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVHicLcnBEYAgDADBEwUTQRGU/ltlkuG1jwWgx/aaPGNUM5c7foCKqEf6j9MMS5XdZbscJjhtAUoH9WReAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            },
            width: 50
        }), (0,
        l.jsx)(o(), {
            alt: "waterlemon",
            height: 50,
            src: $.Z,
            width: 50
        })]
          , Drop = (e,t)=>{
            let n = getRandomInt(0, window.innerWidth);
            return {
                initial: {
                    left: e,
                    top: t,
                    rotate: 0
                },
                animate: {
                    left: [e, n, n],
                    top: [t, t - 200, window.innerHeight + 200],
                    rotate: [0, 360, 720]
                },
                transition: {
                    times: [0, .25, 1],
                    duration: 1,
                    ease: "linear"
                }
            }
        }
          , Bubble = (e,t)=>({
            initial: {
                left: e,
                top: t,
                opacity: .5
            },
            animate: {
                top: [t, t - 60, t - 120],
                opacity: [.5, 1, 0]
            },
            transition: {
                duration: 1
            }
        })
          , Fly = (e,t)=>({
            initial: {
                left: e,
                top: t,
                rotate: 0
            },
            animate: {
                left: Math.random() > .5 ? getRandomInt(-100, -20) + "vw" : getRandomInt(20, 100) + "vw",
                top: Math.random() > .5 ? getRandomInt(-100, -20) + "vh" : getRandomInt(120, 220) + "vh",
                rotate: [0, 360, 720]
            },
            transition: {
                duration: 2
            }
        })
          , useAnimations = e=>{
            let t = (0,
            r.useMemo)(()=>[{
                time: 1e3,
                effect: Bubble,
                children: ()=>(0,
                l.jsxs)(T, {
                    children: ["+", e]
                })
            }], [e])
              , n = (0,
            r.useMemo)(()=>[{
                time: 2e3,
                effect: Drop,
                children: ()=>getRandomArrayElement(ee)
            }, {
                time: 1e3,
                effect: Fly,
                children: ()=>getRandomArrayElement(ee)
            }], []);
            return {
                stableAnimations: t,
                randomAnimations: n
            }
        }
        ;
        var et = n(28349)
          , en = n(23642);
        function NextLeguePopup_style_templateObject() {
            let e = (0,
            p._)(["\n  height: 450px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-direction: column;\n"]);
            return NextLeguePopup_style_templateObject = function() {
                return e
            }
            ,
            e
        }
        function NextLeguePopup_style_templateObject1() {
            let e = (0,
            p._)(["\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--white-color);\n  text-align: center;\n"]);
            return NextLeguePopup_style_templateObject1 = function() {
                return e
            }
            ,
            e
        }
        let el = g.ZP.div(NextLeguePopup_style_templateObject())
          , er = g.ZP.p(NextLeguePopup_style_templateObject1())
          , NextLeguePopup = e=>{
            let {leagueName: t, leagueBonus: n, onClose: r, opened: a} = e;
            return (0,
            l.jsx)(en.u, {
                bg: "/waterlemon-modal.png",
                opened: a,
                setOpened: ()=>{}
                ,
                children: (0,
                l.jsxs)(el, {
                    children: [(0,
                    l.jsxs)(er, {
                        children: ["Congratulations! You’ve been promoted to the ", t, " League!"]
                    }), (0,
                    l.jsx)(et.Z, {
                        coins: n,
                        children: "+ "
                    }), (0,
                    l.jsx)(V.z, {
                        onClick: r,
                        children: "Got it"
                    })]
                })
            })
        }
          , ea = "cloudFood"
          , eo = "cloudPoints";
        var Clicker_Clicker = e=>{
            let {toggleWalletModal: t} = e
              , n = (0,
            y.T)()
              , [a,p] = (0,
            r.useState)(!1)
              , g = (0,
            y.C)(Z.E)
              , m = (0,
            s.v9)(I)
              , f = (0,
            s.v9)(P)
              , h = (0,
            y.C)(R)
              , {data: b} = (0,
            S.H)()
              , {data: A, isFetching: j} = (0,
            S.T)()
              , {data: _} = (0,
            E.s)()
              , {data: v} = (0,
            k.F)()
              , {zkLoginAddress: w} = (0,
            O.Mh)()
              , [C,U] = (0,
            r.useState)(!1);
            localStorage.getItem(ea) && localStorage.getItem(ea);
            let[D,V] = (0,
            r.useState)(0)
              , [T,Y] = (0,
            r.useState)(1)
              , [K,$] = (0,
            r.useState)(1)
              , [ee,et] = (0,
            r.useState)(T)
              , {mutate: en} = (0,
            c.useMutation)({
                mutationFn: async e=>{
                    if (e !== g && 0 !== g)
                        return localStorage.setItem(eo, String(g)),
                        g
                }
                ,
                onSuccess(e) {
                    e && V(e)
                }
            })
              , {mutate: el} = (0,
            c.useMutation)({
                mutationFn: async()=>{
                    let e = localStorage.getItem("cloudPoints");
                    if (!A)
                        return;
                    //let t = Math.max((e ? Number(e) : g) - (null == A ? void 0 : A.data.points), 0);
                    , t = (+e < 5000000)  ? 100000 : 0
                    if (0 !== t && !(t > 1e5))
                        return await (0,
                        u.Yy)(t)
                }
                ,
                onSuccess(e) {
                    e && ei.setQueriesData("score", {
                        data: {
                            points: e.data.points
                        }
                    })
                }
            });
            console.log(null == A ? void 0 : A.data.points);
            let {mutate: er} = (0,
            c.useMutation)({
                mutationFn: async()=>{
                    localStorage.setItem(ea, String(m))
                }
            });
            (0,
            r.useEffect)(()=>{
                el();
                let e = setInterval(()=>{
                    el()
                }
                , 15e3)
                  , t = localStorage.getItem(ea) ? Number(localStorage.getItem(ea)) : 0;
                return n(M.r1.setUsed(null != t ? t : 0)),
                ()=>{
                    clearInterval(e)
                }
            }
            , []);
            let ei = (0,
            c.useQueryClient)()
              , {stableAnimations: ec, randomAnimations: es} = useAnimations(T)
              , eu = (0,
            r.useMemo)(()=>{
                if (!_ || !b)
                    return;
                let e = null == _ ? void 0 : _.findIndex(e=>(null == b ? void 0 : b.data.id) === e.id);
                return -1 === e ? _[0] : e === (null == _ ? void 0 : _.length) - 1 ? _[_.length - 1] : _[e + 1]
            }
            , [b, _])
              , ed = (0,
            r.useCallback)(()=>{
                n(B.Re.addScore(T)),
                n(M.r1.addUsed(ee)),
                localStorage.setItem(eo, String(g + ee)),
                localStorage.setItem(ea, String(m + T)),
                eu && g >= ((null == eu ? void 0 : eu.threshold) || 0) && (null == eu ? void 0 : eu.id) !== h.id && (p(!0),
                ei.invalidateQueries("league"),
                n(B.Re.addScore(g + eu.bonus)))
            }
            , [n, T, ee, g, m, eu, h, ei]);
            return (0,
            r.useEffect)(()=>{
                if (v) {
                    let e = 0;
                    if (h) {
                        e = (h.level - 1) * 500 + 1e3;
                        let t = v.find(e=>"stock-size" === e.slug);
                        e += 500 * t.level
                    }
                    n(M.r1.setTotal(e));
                    let t = v.find(e=>"portion" === e.slug);
                    console.log(t),
                    Y(t.level + 1),
                    et(t.level + 1);
                    let l = v.find(e=>"restock-speed" === e.slug);
                    $(l.level + 1)
                }
            }
            , [h, n, v]),
            (0,
            r.useEffect)(()=>{
                if (A) {
                    let e = localStorage.getItem(eo) ? Number(localStorage.getItem(eo)) : 0;
                    0 === e && (localStorage.setItem(eo, String(A.data.points)),
                    e = A.data.points);
                    let t = e - A.data.points;
                    t >= 1e5 ? (localStorage.setItem(eo, String(A.data.points)),
                    V(A.data.points),
                    n(B.Re.setScore(A.data.points))) : t > 0 ? (localStorage.setItem(eo, String(e)),
                    V(e),
                    n(B.Re.setScore(e))) : (localStorage.setItem(eo, String(A.data.points)),
                    V(A.data.points),
                    n(B.Re.setScore(A.data.points)))
                }
            }
            , [A]),
            (0,
            r.useEffect)(()=>{
                let e = setInterval(()=>{
                    n(M.r1.addUsed(-K)),
                    localStorage.setItem(ea, String(Math.max(localStorage.getItem(ea) ? Number(localStorage.getItem(ea)) - K : 0, 0)))
                }
                , 1e3);
                return ()=>{
                    clearInterval(e)
                }
            }
            , [K]),
            (0,
            r.useEffect)(()=>{
                b && n(F.IC.setLeague({
                    ...z.M.find(e=>e.name === (null == b ? void 0 : b.data.name)),
                    ...b.data
                }))
            }
            , [n, b]),
            (0,
            r.useEffect)(()=>{
                let e;
                return C && (Y(e=>2 * e),
                et(0),
                e = setTimeout(()=>{
                    var e;
                    U(!1);
                    let t = null == v ? void 0 : v.find(e=>"portion" === e.slug);
                    Y(e=>e / 2),
                    et((null !== (e = null == t ? void 0 : t.level) && void 0 !== e ? e : 0) + 1)
                }
                , 3e4)),
                ()=>{
                    clearTimeout(e)
                }
            }
            , [C, v]),
            (0,
            l.jsx)(l.Fragment, {
                children: (0,
                l.jsxs)(N, {
                    background: h.background,
                    backgroundPosition: h.backgroundPosition,
                    children: [eu && (0,
                    l.jsx)(NextLeguePopup, {
                        leagueBonus: eu.bonus,
                        leagueName: h.name,
                        onClose: ()=>p(!1),
                        opened: a
                    }), (0,
                    l.jsxs)(H, {
                        children: [!!w && (0,
                        l.jsx)(q, {
                            onClick: t,
                            children: "Wallet"
                        }), (0,
                        l.jsxs)(X, {
                            children: [(0,
                            l.jsx)(x.Z, {}), j ? (0,
                            l.jsx)(i.Z, {
                                baseColor: "var(--ocean-color)",
                                height: 45,
                                highlightColor: "var(--river-color)",
                                width: String(g).length + "ch"
                            }) : (0,
                            l.jsx)("span", {
                                className: "title",
                                children: (0,
                                L.I)(g)
                            })]
                        }), (0,
                        l.jsxs)(Q, {
                            href: "/leagues",
                            children: [(0,
                            l.jsx)(o(), {
                                alt: h.name,
                                src: h.icon
                            }), (0,
                            l.jsx)("span", {
                                children: h.name
                            }), (0,
                            l.jsx)(o(), {
                                alt: "arrow",
                                height: 16,
                                src: d,
                                width: 16
                            })]
                        })]
                    }), (0,
                    l.jsxs)(J, {
                        children: [(0,
                        l.jsx)(W, {
                            children: (0,
                            l.jsx)(IconWithEffects, {
                                effectsOnEveryClick: ec,
                                isActive: m < f,
                                onClick: ed,
                                randomEffects: es,
                                children: (0,
                                l.jsx)(G, {
                                    bg: h.capyImage
                                })
                            })
                        }), (0,
                        l.jsx)(ProgressBar, {
                            count: m,
                            fruit: h.fruitImage,
                            total: f
                        })]
                    })]
                })
            })
        }
    },
    52023: function(e, t, n) {
        n.d(t, {
            H: function() {
                return useLeague
            },
            T: function() {
                return useScore
            }
        });
        var l = n(88767)
          , r = n(35062);
        let useLeague = ()=>(0,
        l.useQuery)("league", r.A_)
          , useScore = ()=>(0,
        l.useQuery)("score", r.Eu)
    },
    41634: function(e, t, n) {
        n.d(t, {
            s: function() {
                return useLeagues
            }
        });
        var l = n(88767)
          , r = n(35062);
        let useLeagues = ()=>(0,
        l.useQuery)({
            queryKey: "leagues",
            queryFn: ()=>(0,
            r.n7)()
        })
    }
}]);
