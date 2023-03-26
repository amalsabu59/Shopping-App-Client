// const dispach = useDispatch();
// const timeout = 5000;
// const [remaining, setRemaining] = useState(timeout);
// const [lastActive, setLastActive] = useState(+new Date());
// const [isIdle, setIsIdle] = useState(false);

// const handleOnActive = () => setIsIdle(false);
// const handleOnIdle = () => setIsIdle(true);

// const { getRemainingTime, getLastActiveTime } = useIdleTimer({
//   timeout,
//   onActive: handleOnActive,
//   onIdle: handleOnIdle,
// });

// useEffect(() => {
//   setRemaining(getRemainingTime());
//   setLastActive(getLastActiveTime());
//   setInterval(() => {
//     setRemaining(getRemainingTime());
//   }, 100000);
// }, []);

// useEffect(() => {
//   if (remaining === 0) {
//     dispach(logout({ currentUser: null }));
//   }
// }, [remaining]);
