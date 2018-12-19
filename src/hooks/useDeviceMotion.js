const name =`useDeviceMotion`;

const implementation = `const [motion, setMotion] = React.useState({
    acceleration: {
      x: null,
      y: null,
      z: null
    },
    accelerationIncludingGravity: {
      x: null,
      y: null,
      z: null
    },
    rotationRate: {
      alpha: null,
      beta: null,
      gamma: null
    },
    interval: 0
  });

  React.useEffect(() => {
    const handle = deviceMotionEvent => {
      setMotion(deviceMotionEvent);
    };

    window.addEventListener("devicemotion", handle);

    return () => {
      window.removeEventListener("devicemotion", handle);
    };
  }, []);

  return motion;
};`;

const usage = `function Demo() {
  const { acceleration, rotationRate, interval } = useDeviceMotion();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <pre>{JSON.stringify({ acceleration, rotationRate, interval })}</pre>
    </div>
  );
}`;

const url = `https://github.com/palmerhq/the-platform/`;

const description = `Detect and retrieve current device Motion.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}