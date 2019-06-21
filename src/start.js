import * as THREE from 'three';

import './index.css';

const start = () => {
  // 场景
  const scene = new THREE.Scene();
  // 相机
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // 渲染器
  const renderer = new THREE.WebGLRenderer();

  // 设置渲染器的大小
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 把渲染器添加到 body 结点
  document.body.appendChild(renderer.domElement);

  // 一个立方体
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  // 绿色材质
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);

  // 把立方体添加到场景
  scene.add(cube);

  // 设置相机的位置
  camera.position.z = 5;

  const animate = function () {
    requestAnimationFrame(animate);

    // 通过修改场景内的物体属性达到旋转的效果
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // 再一定帧率内调用渲染器，渲染相机视角的场景
    renderer.render(scene, camera);
  };

  animate();
};

export default start;
