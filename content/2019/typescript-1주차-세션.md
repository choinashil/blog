---
subject: Programmers Typescript Study
title: Typescript 1주차 세션
description: 타입스크립트를 배워봅시다
tags: [programmers, typescript]
hiddenTags: ['타입스크립트', '프로그래머스']
date: 2019-09-26T13:41:24.849Z
draft: false
---

### 스터디 시작 전

- 추천도서: [프로그래밍 심리학](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788966260980&orderClick=LAG&Kc=)
- 마크 유튜브 [맠튜브](https://www.youtube.com/user/2woongjae)
  <br>

### 오리엔테이션

#### 1. Git branch

- 2nd-week1 에서 본인이름으로 브랜치 딸 것

- 본인 이름으로 된 디렉토리에서 작업한 후 2nd-week1으로 PR

  <!-- <br> -->

```js
function constant(value) {
  return () => value // highlight-line
}

// highlight-next-line
const alwaysFour = constant(4)

// highlight-start
const zero = [0, 1, 2, 3, 4, 5].map(alwaysFour).filter(x => x !== 4).length
// highlight-end
```

다음과 같이 할 수 있다.

<br>

```ts {diff}
function add(x, y) {
-  return x + x;
+  return x + y;
}
```

어쩌고 저쩌고 블라블라
코드를 이렇게 치면 저렇게 나오고 코드를 이렇게 치면 저렇게 나오고 코드를 이렇게 치면 저렇게 나오고코드를 이렇게 치면 저렇게 나오고 코드를 이렇게 치면 저렇게 나오고 코드를 이렇게 치면 저렇게 나오고 코드를 이렇게 치면 저렇게 나오고 코드를 이렇게 치면 저렇게 나오고 코드를 이렇게 치면 저렇게 나오고 코드를 이렇게 치면 저렇게 나오고 코드를 이렇게 치면 저렇게 나오고

<br>

```ts {numberLines}
import * as React from 'react'

// ...

function SomeComponent(props) {
  // L29
  return <div />
}
```

<br>

- npm package 설치

          npm ci

      `npm ci`는 처음 보는 거라 찾아봤다. npm 5.7.0 버전부터 추가된 내용인데 속도와 안정성 면에서 `npm install`보다 장점이 있는 듯 하다.

      참고

      - [CI(Continous Integration) 환경을 위한 npm ci command](https://trustyoo86.github.io/npm/2018/03/28/npm-ci-command.html)
      - [npm ci](https://devnote.niceilm.net/npm-ci/)
      - [What is the difference between “npm install” and “npm ci”?](https://stackoverflow.com/questions/52499617/what-is-the-difference-between-npm-install-and-npm-ci)

  <br>

- 실행

          npm run serve

  <br>

- 서버 로그인

  - ID: choinashil@test.com

  - 비밀번호: 1234

### 과제 설명

- js 파일들을 타입스크립트로 바꾸기
- 타입스크립트 컴파일 옵션에 대해 이해하는 것이 중요 → `--strict` 옵션을 켜도 문제없이 컴파일이 되도록 작업하는 것이 최종 목표
- webpack, ts-loader, awesome-typescript-loader 등을 사용해서 세팅
- 접근 제어자(public, private)

### Q&A

- 기한은 다음주까지 (최대한 2주 전까지 하면 좋음)
- 리뷰는 최대 이틀정도 걸림
- 한번에 다 해서 올리지 않고 중간에 끊어서 자유롭게 올려도됨
- 본인이 한만큼 리뷰 얻어갈 수 있음
- webpack dev 서버 연결해서 서버 띄우면됨(?)
- npm install 후 vs code에서 새로고침을 하자⭐️

### 중요한 점

톤앤매너 → 코드리뷰를 할때 기분이 나쁘면 안됨

함께 좋은 방향을 찾아가는 커뮤니케이션이므로 젠틀하게, 매너를 지키자.

### 진도 설명

1주차: 타입스크립트 프론트 기초

2주차: 백엔드 API 작업

3-4주차: 프론트, 백엔드 전반적으로 타입 개선

5-6주차: react, vue, angular로 바꾸면서 타입스크립트 적용

- 1주차, 2주차 조금씩 밀림...
- 2주차 백엔드 하기싫은 사람은 건너뛰어도 됨

### API 확인

postman에서 json파일 import해서 테스트하면 됨

<br>
생각보다 훨씬 할게 많아서 큰일났다🤭

포기하지말자~~~

```

```
