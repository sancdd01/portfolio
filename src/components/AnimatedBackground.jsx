import { useEffect, useRef } from "react";
import * as THREE from "three";


const AnimatedBackground = () => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadVanta = async () => {
       const HALO = (await import("vanta/dist/vanta.halo.min")).default;
       
       if(!effectRef.current && isMounted) {
         console.log("Initializing VANTA effect");
         effectRef.current = HALO({
           el: vantaRef.current,
           THREE,
           mouseControls: true,
           touchControls: true,
           baseColor: 0x4444ff,
           backgroundColor: 0x0d0d0d,
           amplitudeFactor: 0.6,
           size: 1.8,
           xOffset: 0,
          });
        }
      }

    loadVanta();

    return () => {
      isMounted = false;
      //if (effectRef.current) effectRef.current.destroy(); 
    };
    
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}/>
  )
}

export default AnimatedBackground;