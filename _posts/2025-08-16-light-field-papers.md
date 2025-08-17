---
title: "Light field super-resolution 관련 논문 비교"
categories:
  - 공부하기
  - 3D Vision
header:
  teaser: "/assets/images/250816/01.png"
tags:
  - 논문
  - vision
  - light field
  - super-resolution
  - AI
  - paper review
---

Light field는 기존의 센서 픽셀 위치에 따른 빛의 세기 I(x,y)로 표현되던 이미징을 넘어 빛이 진행하는 세기와 방향을 함께 기록한 것을 뜻합니다. 

Light field를 물리적으로 구현하기 위해서는 단순히 카메라 혹은 센서를 여러 방향에 배열해서 다방향의 이미지를 기록하거나, micro lens array를 사용하여 한 장의 raw 이미지를 캡처한 다음 디코딩하는 방법이 있습니다.

<figure>
    <img src="/assets/images/250816/03.png" alt="light field 원리" width="400" />
    <figcaption>Yeung et al, "Light Field Spatial Super-Resolution Using Deep
Efficient Spatial-Angular Separable Convolution"</figcaption>
</figure>


Light field imaging을 활용하면 NeRF 등 novel view generation 네트워크의 학습에 필요한 multi-view 데이터셋을 구성하거나, 초점 변경, 이미지의 깊이 추정, 3D reconstruction이 가능해져 찍고자하는 scene의 다양한 feature를 추출해낼 수 있습니다. (참고 - Lytro 카메라)

그러나 light field imaging에는 단점이 있는데, 이렇게 기록되는 light field 이미지의 해상도는 평범한 2D 이미지에 비해 현저히 떨어진다는 것입니다. 

또한, 해상도(spatial resolution) 뿐 아니라 여러 각도에서 scene을 캡처하는 angular resolution 또한 물리적 한계로 부족해 light field가 띄엄띄엄 촬영되기 마련입니다.

이러한 문제점을 해결하기 위해 다양한 light field super resolution 논문이 발표되어오고 있습니다. 

### 1. Light Field Spatial-Resolution Using Deep Efficient Spatial-Angular Separable Convolution [2018]
---


### 2. Light Field Super-resolution via Attention-Guided Fusion of Hybrid Lenses [2020]
---

### 3. Light Field Super-Resolution via Adaptive Feature Remixing [2021]
---

### 4. LFSRDiff: Light Field Image Super-Resolution via Diffusion Models [2023]
---
