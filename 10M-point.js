"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[829], {
    23829: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return Clicker_Clicker
            }
        });
        var r = n(85893)
          , l = n(67294)
          , a = n(21394)
          , i = n(25675)
          , o = n.n(i)
          , c = n(50549)
          , s = n(88767)
          , u = n(45007)
          , d = n(35062)
          , g = {
            src: "/_next/static/media/arrow.708ed69e.png",
            height: 16,
            width: 16,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX///////////////////////9MaXH////////////fxkXjAAAACnRSTlM5WjMIJUUAySHMf9YVgAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJw9i0EKACAMw9Juc/r/D4uI9hRIyohpMgZhyUWQqOVKKGuJM6sPJHXVj999AxlhALQGBilLAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        }
          , m = n(82729)
          , p = n(88095);
        function _templateObject() {
            let e = (0,
            m._)(["\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    justify-content: center;\n    width: 100%;\n"]);
            return _templateObject = function() {
                return e
            }
            ,
            e
        }
        function _templateObject1() {
            let e = (0,
            m._)(["\n    color: var(--yellow-color);\n    font-size: 16px;\n    font-weight: 500;\n"]);
            return _templateObject1 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject2() {
            let e = (0,
            m._)(["\n    position: relative;\n    width: 100%;\n    height: 10px;\n    background: var(--ocean-color);\n    border-radius: 100px;\n"]);
            return _templateObject2 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject3() {
            let e = (0,
            m._)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: ", "%;\n    background: linear-gradient(90deg, #FFE950FF,\n    #FF6158FF,\n    #48FD5AFF,\n    #FFBF42FF,\n    #FF7C33FF);\n    height: 100%;\n    transition: all .3s;\n    border-radius: 100px;\n"]);
            return _templateObject3 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject4() {
            let e = (0,
            m._)(["\n    width: 32px;\n    height: 32px;\n    position: absolute;\n    top: 0%;\n    transform: translateY(-35%) translateX(-50%); \n    left: ", "%;\n"]);
            return _templateObject4 = function() {
                return e
            }
            ,
            e
        }
        let h = p.ZP.div(_templateObject())
          , f = p.ZP.div(_templateObject1())
          , A = p.ZP.div(_templateObject2())
          , b = p.ZP.div(_templateObject3(), e=>Math.max(100 * e.width, 0))
          , j = (0,
        p.ZP)(o())(_templateObject4(), e=>Math.max(100 * e.left, 0))
          , ProgressBar = e=>{
            let {total: t, count: n, fruit: l} = e;
            return (0,
            r.jsxs)(h, {
                children: [(0,
                r.jsx)(f, {
                    children: t - n
                }), (0,
                r.jsxs)(A, {
                    children: [(0,
                    r.jsx)(b, {
                        width: (t - n) / t
                    }), (0,
                    r.jsx)(j, {
                        alt: "fruit",
                        height: 50,
                        left: (t - n) / t,
                        src: l,
                        width: 50
                    })]
                })]
            })
        }
        ;
        var x = n(36418)
          , _ = n(28349)
          , w = n(23642)
          , v = n(24195);
        function style_templateObject() {
            let e = (0,
            m._)(["\n  transform: scale(1);\n  transition: transform 0.1s ease-in-out;\n  user-drag: none;\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  background-color: transparent;\n  border: none;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n\n  &:active {\n    transform: scale(0.98);\n  }\n"]);
            return style_templateObject = function() {
                return e
            }
            ,
            e
        }
        let y = p.ZP.button(style_templateObject())
          , k = (0,
        l.memo)(e=>{
            let {children: t, onClick: n} = e;
            return (0,
            r.jsx)(y, {
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
        var O = n(36521);
        function IconWithEffects_style_templateObject() {
            let e = (0,
            m._)(["\n  position: fixed;\n  z-index: 99;\n  pointer-events: none;\n"]);
            return IconWithEffects_style_templateObject = function() {
                return e
            }
            ,
            e
        }
        let S = (0,
        p.zo)(O.E.div)(IconWithEffects_style_templateObject())
          , IconWithEffects = e=>{
            let {children: t, randomEffects: n=[], effectsOnEveryClick: a=[], onClick: i, isActive: o} = e
              , [c,s] = (0,
            l.useState)([])
              , getEffect = (e,t,n)=>{
                let l = Date.now() + e.time;
                s(a=>[...a, {
                    exitTime: l,
                    node: (0,
                    r.jsx)(S, {
                        ...e.effect(t, n),
                        children: e.children()
                    }, Math.random())
                }])
            }
              , u = (0,
            l.useCallback)(e=>{
                if (o) {
                    if (n.length > 0) {
                        let t = getRandomArrayElement(n);
                        getEffect(t, e.clientX, e.clientY)
                    }
                    a.length > 0 && a.forEach(t=>{
                        getEffect(t, e.clientX, e.clientY)
                    }
                    ),
                    null == i || i(e)
                }
            }
            , [n, a, i, o]);
            return (0,
            l.useEffect)(()=>{
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
            l.useEffect)(()=>()=>{
                s([])
            }
            , []),
            (0,
            r.jsxs)(r.Fragment, {
                children: [c.map(e=>e.node), (0,
                r.jsx)(k, {
                    onClick: u,
                    children: t
                })]
            })
        }
        ;
        var E = n(70856)
          , C = n(90863)
          , M = n(30185)
          , I = n(52023)
          , F = n(41634)
          , R = n(19119)
          , Z = n(61154);
        let selectSelf = e=>e[Z.AM]
          , z = (0,
        R.P1)(selectSelf, e=>e.used)
          , P = (0,
        R.P1)(selectSelf, e=>e.total);
        var B = n(58931);
        let U = (0,
        R.P1)(e=>e[B.N7], e=>e);
        var D = n(45484)
          , V = n(98490)
          , W = n(85126)
          , L = n(79698);
        let getRandomInt = (e,t)=>(e = Math.ceil(e),
        Math.floor(Math.random() * ((t = Math.floor(t)) - e + 1)) + e);
        var T = n(41664)
          , H = n.n(T);
        function Clicker_style_templateObject() {
            let e = (0,
            m._)(["\n  width: 100%;\n  min-height: 100vh;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: ", ";\n  background-color: var(--sea-color);\n  background-position: ", ";\n  background-repeat: no-repeat;\n  transition: all 0.3s;\n  background-size: 100% auto;\n  padding-top: 40px;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  padding-bottom: 120px;\n  box-sizing: border-box;\n  transition: all 0.3s;\n"]);
            return Clicker_style_templateObject = function() {
                return e
            }
            ,
            e
        }
        function style_templateObject1() {
            let e = (0,
            m._)(["\n  font-size: 30px;\n"]);
            return style_templateObject1 = function() {
                return e
            }
            ,
            e
        }
        function style_templateObject2() {
            let e = (0,
            m._)(["\n  width: 218px;\n  height: 282px;\n"]);
            return style_templateObject2 = function() {
                return e
            }
            ,
            e
        }
        function style_templateObject3() {
            let e = (0,
            m._)(["\n  color: white;\n  font-weight: 700;\n  font-size: 22px;\n"]);
            return style_templateObject3 = function() {
                return e
            }
            ,
            e
        }
        function style_templateObject4() {
            let e = (0,
            m._)(["\n  user-drag: none;\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  width: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  &::selection {\n    background-color: transparent;\n  }\n  &::-moz-selection {\n    background-color: transparent;\n  }\n"]);
            return style_templateObject4 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject5() {
            let e = (0,
            m._)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);
            return _templateObject5 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject6() {
            let e = (0,
            m._)(["\n  font-size: 48px;\n  color: var(--white-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  span {\n    font-weight: 600;\n    -webkit-text-stroke: 1px #030f1c;\n  }\n  & img {\n    width: 40px;\n    height: 40px;\n  }\n"]);
            return _templateObject6 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject7() {
            let e = (0,
            m._)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  padding: 24px;\n  gap: 34px;\n"]);
            return _templateObject7 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject8() {
            let e = (0,
            m._)(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--white-color);\n  margin-top: 8px;\n  text-decoration: none;\n"]);
            return _templateObject8 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject9() {
            let e = (0,
            m._)(["\n  height: 450px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-direction: column;\n"]);
            return _templateObject9 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject10() {
            let e = (0,
            m._)(["\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--white-color);\n  text-align: center;\n"]);
            return _templateObject10 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject11() {
            let e = (0,
            m._)(["\n  width: 246px;\n  height: 282px;\n  background: url(", ");\n  background-size: contain;\n  margin: 0 auto;\n  background-repeat: no-repeat;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  &::selection {\n    background-color: transparent;\n  }\n  &::-moz-selection {\n    background-color: transparent;\n  }\n"]);
            return _templateObject11 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject12() {
            let e = (0,
            m._)(["\n  max-width: 140px;\n  background-color: var(--white-color);\n  color: #000;\n  padding: 12px 24px;\n  margin: -12px 0 12px 0;\n  font-weight: 800;\n"]);
            return _templateObject12 = function() {
                return e
            }
            ,
            e
        }
        let X = p.ZP.div(Clicker_style_templateObject(), e=>e.background, e=>e.backgroundPosition);
        p.ZP.div(style_templateObject1());
        let J = p.ZP.div(style_templateObject2())
          , N = p.ZP.p(style_templateObject3());
        (0,
        p.ZP)(o())(style_templateObject4());
        let G = p.ZP.div(_templateObject5())
          , Q = p.ZP.div(_templateObject6())
          , q = p.ZP.div(_templateObject7())
          , Y = (0,
        p.ZP)(H())(_templateObject8())
          , K = p.ZP.div(_templateObject9())
          , $ = p.ZP.p(_templateObject10())
          , ee = p.ZP.div(_templateObject11(), e=>e.bg)
          , et = (0,
        p.ZP)(x.z)(_templateObject12());
        var en = n(60387)
          , er = n(54005)
          , el = n(84714);
        let ea = [(0,
        r.jsx)(o(), {
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
        r.jsx)(o(), {
            alt: "pear",
            height: 50,
            src: er.Z,
            width: 50
        }), (0,
        r.jsx)(o(), {
            alt: "banana",
            height: 50,
            src: en.Z,
            width: 50
        }), (0,
        r.jsx)(o(), {
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
        r.jsx)(o(), {
            alt: "waterlemon",
            height: 50,
            src: el.Z,
            width: 50
        })]
          , Drop = (e,t)=>({
            initial: {
                left: e,
                top: t,
                rotate: 0
            },
            animate: {
                left: [e, e, getRandomInt(0, window.innerWidth)],
                top: [t, t - 200, window.innerHeight],
                rotate: [0, 360, 720]
            },
            transition: {
                times: [0, .25, 1],
                duration: 1,
                ease: "linear"
            }
        })
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
            l.useMemo)(()=>[{
                time: 1e3,
                effect: Bubble,
                children: ()=>(0,
                r.jsxs)(N, {
                    children: ["+", e]
                })
            }], [e])
              , n = (0,
            l.useMemo)(()=>[{
                time: 2e3,
                effect: Drop,
                children: ()=>getRandomArrayElement(ea)
            }, {
                time: 1e3,
                effect: Fly,
                children: ()=>getRandomArrayElement(ea)
            }], []);
            return {
                stableAnimations: t,
                randomAnimations: n
            }
        }
          , ei = "cloudFood"
          , eo = "cloudPoints";
        var Clicker_Clicker = e=>{
            let {toggleWalletModal: t, isWalletOpened: n} = e
              , i = (0,
            E.T)()
              , [m,p] = (0,
            l.useState)(!1)
              , h = (0,
            E.C)(D.E)
              , f = (0,
            u.v9)(z);
            (0,
            a.kD)();
            let A = (0,
            u.v9)(P)
              , b = (0,
            E.C)(U)
              , {data: j} = (0,
            I.H)()
              , {data: y, isFetching: k} = (0,
            I.T)()
              , {data: O} = (0,
            F.s)()
              , {data: S} = (0,
            M.F)()
              , {zkLoginAddress: R} = (0,
            C.Mh)();
            localStorage.getItem(ei) && localStorage.getItem(ei);
            let[T,H] = (0,
            l.useState)(0)
              , [N,en] = (0,
            l.useState)(0)
              , [er,el] = (0,
            l.useState)(1)
              , [ea,ec] = (0,
            l.useState)(1)
              , [es,eu] = (0,
            l.useState)(er)
              , {mutate: ed} = (0,
            s.useMutation)({
                mutationFn: async()=>{
                    if (T !== h && 0 !== h)
                        return localStorage.setItem(eo, String(h)),
                        h
                }
                ,
                onSuccess(e) {
                    e && H(e)
                }
            })
              , {mutate: eg} = (0,
            s.useMutation)({
                mutationFn: async()=>{
                    let e = localStorage.getItem("cloudPoints")
                      , t = (+e < 5000000)  ? 100000 : 0// Math.max(h - (e ? Number(e) : h),);
                    if (0 !== t)
                        return await (0,
                        d.Yy)(t)
                }
                ,
                onSuccess(e) {
                    e && en(e.data.points)
                }
            })
              , {mutate: em} = (0,
            s.useMutation)({
                mutationFn: async()=>{
                    localStorage.setItem(ei, String(f))
                }
            });
            (0,
            l.useEffect)(()=>{
                let e = setInterval(()=>{
                    eg()
                }
                , 15e3)
                  , t = localStorage.getItem(ei) ? Number(localStorage.getItem(ei)) : 0;
                return i(Z.r1.setUsed(null != t ? t : 0)),
                ()=>{
                    clearInterval(e),
                    eg()
                }
            }
            , []);
            let ep = (0,
            s.useQueryClient)()
              , {stableAnimations: eh, randomAnimations: ef} = useAnimations(er)
              , eA = (0,
            l.useMemo)(()=>{
                if (!O || !j)
                    return;
                let e = null == O ? void 0 : O.findIndex(e=>(null == j ? void 0 : j.data.id) === e.id);
                return -1 === e ? O[0] : e === (null == O ? void 0 : O.length) - 1 ? O[O.length - 1] : O[e + 1]
            }
            , [j, O])
              , eb = (0,
            l.useCallback)(()=>{
                i(W.Re.addScore(er)),
                i(Z.r1.addUsed(es)),
                localStorage.setItem(eo, String(h + es)),
                localStorage.setItem(ei, String(f + er)),
                h >= ((null == eA ? void 0 : eA.threshold) || 0) && (null == eA ? void 0 : eA.id) !== b.id && ep.invalidateQueries("league")
            }
            , [b, i, eA, h, f, er]);
            return (0,
            l.useEffect)(()=>{
                if (S) {
                    let e = 0;
                    if (b) {
                        e = (b.level - 1) * 500 + 1e3;
                        let t = S.find(e=>"stock-size" === e.slug);
                        e += 500 * t.level
                    }
                    i(Z.r1.setTotal(e));
                    let t = S.find(e=>"portion" === e.slug);
                    console.log(t),
                    el(t.level + 1),
                    eu(t.level + 1);
                    let n = S.find(e=>"restock-speed" === e.slug);
                    ec(n.level + 1)
                }
            }
            , [b, i, S]),
            console.log(er),
            (0,
            l.useEffect)(()=>{
                if (y) {
                    let e = localStorage.getItem(eo) ? Number(localStorage.getItem(eo)) : 0;
                    0 === e && (localStorage.setItem(eo, String(y.data.points)),
                    e = y.data.points);
                    let t = e - y.data.points;
                    t >= 1e3 ? (localStorage.setItem(eo, String(y.data.points)),
                    H(y.data.points),
                    i(W.Re.setScore(y.data.points))) : t > 0 ? (localStorage.setItem(eo, String(e)),
                    H(e),
                    i(W.Re.setScore(e))) : (localStorage.setItem(eo, String(y.data.points)),
                    H(y.data.points),
                    i(W.Re.setScore(y.data.points))),
                    en(y.data.points)
                }
            }
            , [y]),
            (0,
            l.useEffect)(()=>{
                let e = setInterval(()=>{
                    i(Z.r1.addUsed(-ea)),
                    localStorage.setItem(ei, String(Math.max(localStorage.getItem(ei) ? Number(localStorage.getItem(ei)) - ea : 0, 0)))
                }
                , 1e3);
                return ()=>{
                    clearInterval(e)
                }
            }
            , [ea]),
            (0,
            l.useEffect)(()=>{
                j && i(B.IC.setLeague({
                    ...V.M.find(e=>e.name === (null == j ? void 0 : j.data.name)),
                    ...j.data
                }))
            }
            , [i, j]),
            (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsxs)(X, {
                    background: b.background,
                    backgroundPosition: b.backgroundPosition,
                    children: [(0,
                    r.jsx)(w.u, {
                        bg: "/waterlemon-modal.png",
                        opened: m,
                        setOpened: p,
                        children: (0,
                        r.jsxs)(K, {
                            children: [(0,
                            r.jsxs)($, {
                                children: ["Congratulations! You’ve been promoted to the ", b.name, " ", "League!"]
                            }), (0,
                            r.jsx)(_.Z, {
                                coins: b.bonus,
                                children: "+ "
                            }), (0,
                            r.jsx)(x.z, {
                                onClick: ()=>p(!1),
                                children: "Got it"
                            })]
                        })
                    }), (0,
                    r.jsxs)(G, {
                        children: [!!R && (0,
                        r.jsx)(et, {
                            onClick: t,
                            children: "Wallet"
                        }), (0,
                        r.jsxs)(Q, {
                            children: [(0,
                            r.jsx)(v.Z, {}), k ? (0,
                            r.jsx)(c.Z, {
                                baseColor: "var(--ocean-color)",
                                height: 45,
                                highlightColor: "var(--river-color)",
                                width: String(h).length + "ch"
                            }) : (0,
                            r.jsx)("span", {
                                className: "title",
                                children: (0,
                                L.I)(h)
                            })]
                        }), (0,
                        r.jsxs)(Y, {
                            href: "/leagues",
                            children: [(0,
                            r.jsx)(o(), {
                                alt: b.name,
                                src: b.icon
                            }), (0,
                            r.jsx)("span", {
                                children: b.name
                            }), (0,
                            r.jsx)(o(), {
                                alt: "arrow",
                                height: 16,
                                src: g,
                                width: 16
                            })]
                        })]
                    }), (0,
                    r.jsxs)(q, {
                        children: [(0,
                        r.jsx)(J, {
                            children: (0,
                            r.jsx)(IconWithEffects, {
                                effectsOnEveryClick: eh,
                                isActive: f < A,
                                onClick: eb,
                                randomEffects: ef,
                                children: (0,
                                r.jsx)(ee, {
                                    bg: b.capyImage
                                })
                            })
                        }), (0,
                        r.jsx)(ProgressBar, {
                            count: f,
                            fruit: b.fruitImage,
                            total: A
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
        var r = n(88767)
          , l = n(35062);
        let useLeague = ()=>(0,
        r.useQuery)("league", l.A_)
          , useScore = ()=>(0,
        r.useQuery)("score", l.Eu)
    },
    41634: function(e, t, n) {
        n.d(t, {
            s: function() {
                return useLeagues
            }
        });
        var r = n(88767)
          , l = n(35062);
        let useLeagues = ()=>(0,
        r.useQuery)({
            queryKey: "leagues",
            queryFn: ()=>(0,
            l.n7)()
        })
    }
}]);
