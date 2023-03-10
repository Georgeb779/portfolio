import {
  Bounds,
  OrbitControls,
  PerspectiveCamera,
  useProgress,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';

import { Button, PersonalIcon } from '@/components';
import style from '@/styles/home.module.scss';

const Index = () => {
  const [boundValue, setBoundValue] = useState(1.5);
  const { progress } = useProgress();

  console.log(progress);

  useEffect(() => {
    setTimeout(() => {
      setBoundValue(1.3);
    }, 1000);
  }, []);

  return (
    <>
      <div className={style.home__container}>
        <div className={style.personal_icon__container}>
          <Canvas>
            <ambientLight intensity={0.7} />
            <spotLight
              intensity={0.4}
              angle={0.5}
              penumbra={1}
              position={[5, 5, 5]}
              castShadow
            />
            <PerspectiveCamera
              makeDefault
              position={[-210, 100, 190]}
              fov={60}
              zoom={1.3}
            />
            <Bounds fit clip observe margin={boundValue}>
              <Suspense fallback={null}>
                <PersonalIcon />
              </Suspense>
              <OrbitControls
                autoRotate
                makeDefault
                enableZoom={false}
                autoRotateSpeed={0.5}
              />
            </Bounds>
          </Canvas>
        </div>
        <div className={style.personal_info__container}>
          <div>
            <p>Hi there,</p>
            <p>my name is George Baez.</p>
            <p>
              I am a <span className={style.bold}> Software Engineer </span>{' '}
              based in Dominican Republic.
            </p>
            <p>
              As a Developer with
              <span className={style.bold}> 2 years of experience</span>, I have
              work in both
              <span className={style.bold}> Frontend</span> and
              <span className={style.bold}> Backend</span> development. I am
              proficient in a variety of programming languages and frameworks.
              <br />
              <span className={style.link}>
                <Link href="/about">About me</Link>
              </span>
            </p>
          </div>
          <div className={style.btn__container}>
            <Link href="/portfolio">
              <Button dataText={'Portfolio'} className="primary" />
            </Link>
            <Link href="/contact">
              <Button dataText={'Contact Me'} className="primary" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
