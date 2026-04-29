import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader, Vector3 } from "three";

// lat/lon → 3D point on unit sphere
function latLonToVec3(lat, lon, radius = 1.02) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

const LOCATIONS = [
  // International
  { name: "England", lat: 51.5, lon: -0.1 },
  { name: "Scotland", lat: 56.5, lon: -4.2 },
  { name: "Spain", lat: 40.4, lon: -3.7 },
  { name: "Italy", lat: 41.9, lon: 12.5 },
  { name: "Germany", lat: 52.5, lon: 13.4 },
  { name: "UAE", lat: 24.5, lon: 54.4 },
  { name: "Japan", lat: 35.7, lon: 139.7 },
  { name: "Canada", lat: 45.4, lon: -75.7 },
  { name: "Wake Island", lat: 19.3, lon: 166.6 },
  // US states (approximate centers)
  { name: "Indiana", lat: 40.3, lon: -86.1 },
  { name: "Illinois", lat: 40.0, lon: -89.2 },
  { name: "Ohio", lat: 40.4, lon: -82.8 },
  { name: "New Jersey", lat: 40.1, lon: -74.5 },
  { name: "Maine", lat: 45.4, lon: -69.0 },
  { name: "West Virginia", lat: 38.6, lon: -80.5 },
  { name: "Florida", lat: 27.8, lon: -81.6 },
  { name: "Tennessee", lat: 35.9, lon: -86.7 },
  { name: "Texas", lat: 31.0, lon: -100.0 },
  { name: "California", lat: 36.8, lon: -119.4 },
  { name: "Nevada", lat: 38.8, lon: -116.4 },
  { name: "Washington", lat: 47.4, lon: -120.5 },
  { name: "Alaska", lat: 64.2, lon: -153.0 },
  { name: "Hawaii", lat: 20.8, lon: -156.3 },
  { name: "Oregon", lat: 44.0, lon: -120.5 },
  { name: "Utah", lat: 39.3, lon: -111.1 },
  { name: "Colorado", lat: 39.0, lon: -105.5 },
  { name: "Wyoming", lat: 43.0, lon: -107.5 },
  { name: "Kansas", lat: 38.5, lon: -98.4 },
  { name: "Iowa", lat: 42.0, lon: -93.5 },
  { name: "Missouri", lat: 38.5, lon: -92.5 },
  { name: "Oklahoma", lat: 35.5, lon: -97.5 },
  { name: "Arizona", lat: 34.3, lon: -111.1 },
  { name: "New Mexico", lat: 34.5, lon: -106.2 },
];

function TravelPin({ lat, lon }) {
  const pos = useMemo(() => latLonToVec3(lat, lon), [lat, lon]);
  return (
    <mesh position={pos}>
      <sphereGeometry args={[0.012, 8, 8]} />
      <meshStandardMaterial color="#56d0ff" emissive="#56d0ff" emissiveIntensity={1.5} />
    </mesh>
  );
}

function Globe({ scrollProgress }) {
  const meshRef = useRef();
  const colorMap = useLoader(TextureLoader, "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg");

  useFrame(() => {
    if (!meshRef.current) return;
    // base slow auto-rotation + scroll-driven rotation
    meshRef.current.rotation.y += 0.001;
    meshRef.current.rotation.y += scrollProgress.current * 0.01;
    scrollProgress.current *= 0.9; // decay
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={colorMap} />
      {LOCATIONS.map((loc) => (
        <TravelPin key={loc.name} lat={loc.lat} lon={loc.lon} />
      ))}
    </mesh>
  );
}

export default function GlobeScene({ scrollProgress }) {
  return (
    <Canvas camera={{ position: [0, 0, 2.8], fov: 45 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 3, 5]} intensity={2} />
      <directionalLight position={[-5, -3, -5]} intensity={0.5} />
      <Stars radius={100} depth={50} count={4000} factor={4} fade />
      <Globe scrollProgress={scrollProgress} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI * 0.2}
        maxPolarAngle={Math.PI * 0.8}
      />
    </Canvas>
  );
}
