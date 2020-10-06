---
subject: python
title: 파이썬 리스트 순회 방법 총정리
description: for in, range, enumerate, zip, itertools 등을 이용해 파이썬의 다양한 리스트 순회방법 마스터하기!
tags: ['python']
hiddenTags:
  [
    '파이썬',
    '리스트',
    '순회',
    'for문',
    'range',
    'enumerate',
    'zip',
    'itertools',
  ]
date: 2019-07-22T07:00:06.778Z
draft: false
---

첫 언어로 자바스크립트를 배웠고, 최근에 파이썬을 배우기 시작했다. 아직 파이썬 문법이 익숙하지 않아 알고리즘을 풀 때마다 loop 돌리는 부분에서 머뭇거리곤 했다. 자바스크립트였으면 이렇게 했을텐데, 하며 아쉬운 생각만 해오다가 이번에 정리를 해봤다.

<br>

우선, 아래는 자바스크립트로 for를 사용해서 loop 돌리는 방식이다. index 초기값과 증가분 지정이 가능하고, index와 value에 편하게 접근이 가능하다. 아래 코드를 확장해나가는 방식으로 파이썬 리스트 순회방법을 정리해보자.

```javascript
let arr = [1, 2, 3, 4, 5]
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
```

<br>

### 1. index 사용해서 접근하기

#### - while

i의 값을 미리 세팅해놓고, while문 돌때마다 i값을 증가시키는 방식이다. 다른 언어에서 많이 사용하는 방식이지만, 파이썬에서 많이 쓰는 스타일은 아니다.

```python
arr = [1, 2, 3, 4, 5]
i = 0
while i < len(arr):
    print(arr[i])
    i += 1
```

<br>

#### - range of length

range를 이용해서 i의 리스트를 만들어서 순회하는 방식이다. range로 만들어지는 list는 0부터 `arr의 길이 - 1`이다. 이 예제에서는 `[0, 1, 2, 3, 4]`가 나온다.

이 방식을 사용하면 index와 값 모두에 접근이 가능하다는 장점이 있다.

```python
arr = [1, 2, 3, 4, 5]
for i in range(len(arr)):
    print(arr[i])
```

<br>

### 2. index가 필요없는 경우

#### - for ~ in

위의 두 예제보다 좀 더 [Pythonic](https://www.computerhope.com/jargon/p/pythonic.htm)한 방식이다. 간단하지만 손에 붙기까지 시간이 필요했다. (알고리즘 풀려다 이게 생각 안나서 쓰게 된 포스팅.. 허허)

```python
arr = [1, 2, 3, 4, 5]
for n in arr:
    print(n)
```

<br>

### 3. 근데 만약 index가 필요하다면?

#### - range(len(list))

```python
rainbow = ['빨', '주', '노', '초', '파', '남', '보']
for i in range(len(rainbow)):
    print(f'{i}번째 색깔: {rainbow[i]}')
```

위에서 한번 나왔던 것처럼 `range(len(list))` 방식을 사용할 수 있다. 하지만 이 방식보다 `enumerate` 함수를 사용하면 더 자연스럽고 _파이써닉하게(!)_ 쓸 수 있다.

<br>

#### - enumerate

```python
rainbow = ['빨', '주', '노', '초', '파', '남', '보']
for i, color in enumerate(rainbow, start=1):
    print(f'{i}번째 색깔: {color}')

# 1번째 색깔: 빨
# 2번째 색깔: 주
# 3번째 색깔: 노
# 4번째 색깔: 초
# 5번째 색깔: 파
# 6번째 색깔: 남
# 7번째 색깔: 보
```

파이썬에 기본으로 내장되어있는 enumerate 함수는 `iterator`를 반환하는데, iterator를 순회하면서 index와 value에 접근할 수 있다.

<br>

```python
iter = enumerate(rainbow)
print(iter) # <enumerate object at 0x11224d1f8>
print(list(iter))
# [(0, '빨'), (1, '주'), (2, '노'), (3, '초'), (4, '파'), (5, '남'), (6, '보')]
```

또한 enumerate의 옵션으로 `start 키워드 인자에 숫자를 지정`해서 index의 시작값을 정할 수도 있다. 아무것도 지정하지 않은 경우 default는 0이다.
위의 예제에서는 `start=1`을 지정해줘서 `'1번째 색깔: 빨'` 부터 프린트되었고, 밑의 예제에서는 아무것도 지정하지 않아 list의 첫번째 인덱스가 0으로 나온 것이다.

<br>

### 4. 여러개 동시에 loop 돌아야 하는 경우

작업을 하다보면 두 개의 리스트를 동시에 탐색해야 하는 경우도 있다. 예를 들면, 아래와 같이 상품 정보와 가격 정보가 서로 다른 리스트에 들어있고, 동일한 인덱스끼리 매칭해야 하는 경우이다.

```python
fruits = ['바나나', '사과', '복숭아', '오렌지']
prices = [3000, 2000, 5000, 6000]
```

<br>

#### - enumerate

위에서 편리하게 사용했던 enumerate로 먼저 두 리스트를 동시에 순회해본다.

```python
for i, fruit in enumerate(fruits):
    price = prices[i]
    print(f'{fruit}: {price}원')

# 바나나: 3000원
# 사과: 2000원
# 복숭아: 5000원
# 오렌지: 6000원
```

원하는 대로 결과가 나오긴 하지만, enumerate의 index가 조금 어색하게 사용되었다. prices에서 값을 꺼내오기 위한 용도로 fruits의 index를 끼워맞춰 사용한 느낌.. 뭔가 더 동시에 하는 방법이 없을까?

<br>

#### - zip

zip을 사용하면 index를 신경쓰지 않아도 된다.

```python
for fruit, price in zip(fruits, prices):
    print(f'{fruit}: {price}원')
```

enumerate를 사용했을 때와 똑같은 결과를 얻으면서 코드는 훨씬 간단하다. zip을 사용하면 두 개 이상의 리스트도 동시 순회가 가능하다.

```python
features = ['노란', '새빨간', '잘 익은', '상큼한']
fruits = ['바나나', '사과', '복숭아', '오렌지', '수박']
prices = [3000, 2000, 5000, 6000, 10000]

for feature, fruit, price in zip(features, fruits, prices):
    print(f'{feature} {fruit}: {price}원')

# 노란 바나나: 3000원
# 새빨간 사과: 2000원
# 잘 익은 복숭아: 5000원
# 상큼한 오렌지: 6000원
```

(이렇게 3개도 가능!)

<br>

대신 알아둬야 할 점은 비교하는 리스트들의 길이가 다른 경우에 `가장 짧은 리스트의 길이에 맞춰 끝난다`는 점이다. 예시에서 fruits와 prices 리스트의 길이는 5지만 feature 리스트의 길이가 4이다보니, 수박에 대한 설명은 나오지 않고 끝나버렸다.

<br>

#### - itertools

이런 경우 수박까지 나오게 하고 싶다면 `itertools`의 `zip_longest`를 사용하면 된다. 기본 사용방법은,

```python
import itertools

itertools.zip_longest(*iterables, fillvalue=None)
```

- itertools를 import하기
- zip_longest의 인자로 순회가능한 객체들 넣어주기
- 구멍난 부분들 메울 value를 `fillvalue`의 인자로 넣어주기

이다.

<br>

```python
import itertools
menu = list(itertools.zip_longest(colors, fruits, prices, fillvalue='맛있는'))
for color, fruit, price in menu:
    print(f'{color} {fruit}: {price}원')

# 노란 바나나: 3000원
# 새빨간 사과: 2000원
# 잘 익은 복숭아: 5000원
# 상큼한 오렌지: 6000원
# 맛있는 수박: 10000원
```

zip_longest의 결과를 list로 바꿔준 뒤 for ~ in을 사용해서 print한 결과이다.

<br>

이건 처음 본 함수여서 더듬더듬 찾아가며 해봤는데 항상 리스트들의 길이를 맞출 수 없기 때문에 유용하게 쓰일 것 같다. 자세한 내용은 [itertools.zip_longest 문서](https://docs.python.org/3/library/itertools.html#itertools.zip_longest)를 참고하세요.

<br>

또 한가지 zip에 대한 설명을 추가하자면, 파이썬2의 zip은 `list`를 return하고, 파이썬3의 zip은 `lazy iterable`을 return한다. (이런 점에서 파이썬3의 zip은 파이썬2에서는 xrange와 더 비슷함)

`lazy iterable`은 게을러서 값들을 미리 가지고 있지 않고, 우리가 필요로 할 때만 계산해서 보여주기 때문에 필요없는 계산을 하지 않아 속도가 빠른 방법이다. 그리고 한번 loop을 돌면서 값들을 보여주고 나면 소진되버린다는 특징이 있다.

### 5. [요약] 그래서 loop을 어떻게 돌라고?

#### 1. 하나의 list 돌면서 `값`만 필요한 경우 → `for ~ in` 사용

```python
for n in numbers:
    print(n)
```

<br>

#### 2. 하나의 list 돌면서 `인덱스, 값` 둘 다 필요한 경우 → `enumerate` 사용

```python
for i, color in enumerate(rainbow, start=1):
    print(f'{i}번째 색깔: {color}')
```

<br>

#### 3. `두 개 이상의 list`를 동시에 돌아야 하는 경우 → `zip` 사용

```python
for fruit, price in zip(fruits, prices):
    print(f'{fruit}: {price}원')
```

<br>

### 6. 마무리

알고리즘 풀다 loop에 막혀 정리해본 글인데, 이번 기회에 항상 뒤죽박죽이던 iterator와 lazy iterable까지 정리가 되어 뿌듯하다. 이제 다시 알고리즘을 풀러 가야겠다. 총총🐙

<br>

### Reference

- [How to loop with indexes in Python](https://treyhunner.com/2016/04/how-to-loop-with-indexes-in-python/) - loop 관련 전반적인 flow는 해당 글을 많이 참조했다
- [Python: range is not an iterator!](https://treyhunner.com/2018/02/python-range-is-not-an-iterator/) - iterator와 iterable, lazy iterable 등에 대한 개념정리가 잘 나와있는 글
- [Python Iterators](https://www.w3schools.com/python/python_iterators.asp) - iter()에 대한 설명과 예제가 나와있는 글
- [Python 3's range is more powerful than Python 2's xrange](https://treyhunner.com/2018/02/python-3-s-range-better-than-python-2-s-xrange/) - python3의 range와 python2의 xrange 비교글
- [[위키백과] 느긋한 계산법 (Lazy evaluation)](https://ko.wikipedia.org/wiki/%EB%8A%90%EA%B8%8B%ED%95%9C_%EA%B3%84%EC%82%B0%EB%B2%95)
- [[번역] 이터레이터와 제너레이터](https://mingrammer.com/translation-iterators-vs-generators/) - 컨테이너, 이터레이터, 제너레이터 등에 관한 글
- [GeeksforGeeks - Enumerate() in Python](https://www.geeksforgeeks.org/enumerate-in-python/) - Enumerate 예시 참조한 글
