---
title: 개발자를 위한 맥북 설정
description: 생산성을 훅! 올려주는 자잘하고도 중요한 세팅들
tags: ['개발환경']
hiddenTags: ['개발환경', '개발자', '맥북세팅', '맥북환경설정']
date: 2020-09-26T09:55:14.228Z
draft: false
---

### 1. General
![이미지 설명](./img/dev-setup-mac/01-general.png)
- `Appearance` > `Dark`: 다크 모드를 사용하면 눈에 피로감이 덜하다.
- `Show scroll bars` > `Automatically based on mouse or trackpad`로 설정하면 필요할 때만 스크롤 막대가 보여 화면이 깔끔하다.
- `Default web browser`: 크롬으로 지정

<br>

### 2. Dock
![이미지 설명](./img/dev-setup-mac/02-dock.png)
- `Size`를 줄여 Dock이 차지하는 공간을 줄인다.
- `Automatically hide and show the Dock`을 활성화하여 필요하지 않을 때에는 Dock을 숨긴다.
- `Show recent application in Dock`을 비활성화시킨다. 사용한 프로그램들이 자꾸 Dock에 쌓여서 늘어나는 것이 개인적으로 지저분해서 좋아하지 않는다.

<br>

### 3. Mission Control
![이미지 설명](./img/dev-setup-mac/03-mission-control.png)
- `Automatically rearrange Spaces based on most recent use`를 비활성화한다. 사용 내역에 따라 의도하지 않게 순서가 변경될 수 있어 꺼두는 것이 좋다.

<br>

### 4. Language & Region
![이미지 설명](./img/dev-setup-mac/04-language-region.png)
- `Preferred languages`를 `English > 한국어` 순으로 설정한다. 에러 메세지가 영어로 나와 검색이 더 수월하다.

<br>

### 5. Accessibility
![이미지 설명](./img/dev-setup-mac/05-accessibility.png)
- `Pointer Control` > `Mouse & Trackpad` > `Trackpad Options` > `Enable dragging`을 `three finger drag`로 설정한다. 트랙패드를 누르지 않고 창 이동을 할 수 있어 편리하다.

<br>

### 6. Security & Privacy
![이미지 설명](./img/dev-setup-mac/06-security-1.png)
![이미지 설명](./img/dev-setup-mac/06-security-2.png)
- `General` > `Require password 'immediately' after sleep or screen saver begins`: 개인 컴퓨터라면 크게 중요하지 않을 수도 있지만, 보안이 중요한 경우에는 언제나 패스워드 입력을 하도록 한다.
- `FileVault` > `Turn On FileVault`: 분실 시 복구가 불가능하도록 SSD 내의 데이터들을 암호화하는 기능이다. 예전에는 성능 이슈가 있었으나 요즘에는 속도 차이를 체감하기 어렵다고 한다.

<br>

### 7. Bluetooth
![이미지 설명](./img/dev-setup-mac/07-bluetooth.png)
- `Show Bluetooth in menu bar`를 활성화한다. 외장 기기 연결을 관리하기 편하다.

<br>

### 8. Sound
![이미지 설명](./img/dev-setup-mac/08-sound.png)
- `Sound Effects` > `Show volume in menu bar`를 활성화한다. 외장 모니터나 에어팟 연결 시 소리를 어느 기기에서 출력할지 메뉴바에서 수정하기 편하다.

<br>

### 9. Keyboard
![이미지 설명](./img/dev-setup-mac/09-keyboard-1.png)
![이미지 설명](./img/dev-setup-mac/09-keyboard-2.png)
![이미지 설명](./img/dev-setup-mac/09-keyboard-3.png)
- `Keyboard` > `Key Repeat`은 제일 빠르게 설정한다. 쉘에서 백스페이스로 글자를 지울 때 빠르게 지울 수 있어 편리하다.
- `Text` > `Correct spelling automatically`, `Capitalize words automatically`,  `Add period with double-space`, `Touch Bar typing suggestions`를 비활성화한다.
- `Input Sources` > `Use the 한/영 key to switch to and from ABC`를 활성화한다. 신형 맥북에서는 이게 default인데, 구형 맥북인 경우 Caps Lock 키로 한영 전환되도록 설정할 수 있다.

<br>

### 10. Trackpad
![이미지 설명](./img/dev-setup-mac/10-trackpad-1.png)
![이미지 설명](./img/dev-setup-mac/10-trackpad-2.png)
- `Point & Click` > `Look up & data detectors`를 `Tap with three fingers`로 변경한다. 물리적으로 눌러야하는 기능을 최대한 줄인다. 
- `Point & Click` > `Tap to click`을 활성화한다. 트랙패드에 물리적 압력을 가하지 않고 터치만으로 클릭 기능을 사용할 수 있어 손목에 부담이 덜 간다.
- `Point & Click` > `Tracking speed`는 제일 빠르게 설정한다. 이 역시 손가락을 조금만 움직여도 동작 범위가 넓어 손목에 부담이 덜 간다.
- `More Gestures` > `Swipe between full-screen apps`와 `Mission Control`을 `Swipe (left or right / up) with four fingers`로 변경한다. `Accessibility`에서 드래그를 세 손가락으로 수정한 경우 중복을 방지하기 위해서이다.

<br>

### 11. Date & Time
![이미지 설명](./img/dev-setup-mac/11-date-time.png)
- `Clock` > `Date options` > `Show date`를 활성화한다. 메뉴바에서 날짜를 확인할 수 있어 편하다.

<br>

### 12. 배터리 잔량 표시
![이미지 설명](./img/dev-setup-mac/12-battery.png)
- 메뉴바의 배터리 아이콘을 클릭해서 `Show Percentage`를 활성화한다. 배터리 잔량을 퍼센트 단위로 확인할 수 있다.
