# React News Viewer 만들기

### 사용 라이브러리

`React`, `Axios`, `styled-components`

---

### API

-   테스트 코드 : `https://jsonplaceholder.typicode.com/todos/1`
-   news API : `https://newsapi.org/register`
    -   전체 뉴스 불러오기 : **GET** `https://newsapi.org/v2/top-headlines?country=kr&apikey=발급받은KEY`
    -   특정 카테고리 뉴스 불러오기 : **GET** `https://newsapi.org/v2/top-headlines?country=kr&category=business&apikey=발급받은KEY`
        -   카테고리 종류 : `business`, `entertainment`, `health`, `science`, `sports`, `technology`

---

## 1. News Item 만들기

**데이터 형태**

```json
{
    "source": {
    "id": null,
    "name": "Mk.co.kr"
    },
    "author": "매일경제",
    "title": "美 WSJ \"한국, 코로나 치명률 세계 최저…첫 풍토병 전환국 될 것\" - 매일경제",
    "description": "한국이 코로나19를 팬데믹(세계적 전염병 대유행)이 아닌 `엔데믹`(풍토병) 수준으로 낮추는 세계 최초의 국가가 될 수 있다는 전망이 제기됐다.  지난 30일(현지시각) 미국 월스트리트저널(WSJ)은 `한국·싱가포르 등 아시아 국가들은 코로",
    "url": "https://www.mk.co.kr/news/world/view/2022/03/291736/",
    "urlToImage": "https://file.mk.co.kr/meet/neds/2022/03/image_readtop_2022_291736_16487078804993631.jpg",
    "publishedAt": "2022-03-31T06:24:40Z",
    "content": "19 ( ) ''() .\r\n30() (WSJ) '· 19 ' .\r\nWSJ 19 .\r\nWSJ 19 . 3 19 3 , 0.12%. (1.22%), (0.79%), (0.44%) .\r\n, , , 19 .\r\nWSJ \" 19 \" \" · \" .\r\n. 19 1 2 . 19 .\r\n19 .\r\n19 29 .\r\n[ ][ &amp; mk.co.kr, ]"
},
```

#### 필드에 나타낼 데이터

-   title : 제목
-   description: 내용
-   url: 링크
-   urlToImage: 뉴스 이미지

## 데이터 연동하기

> axios를 이용하여 뉴스 리스트 데이터 연동하기

-   `useEffect`를 이용하여 컴포넌트가 렌더링되는 시점에 API 호출하기
-   async/await을 사용하기 위해 useEffect 함수 안에 또 다른 함수 만들어주기
    -   useEffect에서 반환해야 하는 값은 뒷정리 함수이기 때문
-   loading이라는 상태로 API 요청이 대기 중인지 판별
    -   로딩중일 때는 loading 값이 true
    -   요청이 끝나면 loading 값이 false
-   대기중일때, article 값이 설정되지 않았을 때의 return값 설정하기

## 카테고리 기능 구현하기

**카테고리 종류**

-   business (비즈니스)
-   science (과학)
-   entertainment (연예)
-   sports (스포츠)
-   health (건강)
-   technology (기술)
