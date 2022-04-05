# 내일의 집

- 결과물 주소 👉 https://lechhw.github.io/tomorrow-house

## 사용 기술

<br/>

- HTML
- Sass(SCSS)
- Vanilla Javascript

<br/>

## 프로젝트 구현과정 소개

<br/>

- 유지보수에 용이하게끔 Semantic 하게 html 구조를 설계하고 스크린리더 환경에서도 웹 접근성과 사용성을 위해 필요한 요소에는 aria-lable 작성을 하여 웹접근성을 높이게끔 하였습니다.

<br/>

- CSS 의 전처리기인 Sass(SCSS) 를 사용하여 유지보수와 재사용 가능한 코드를 작성하는 법을 배웠습니다.

<br/>

- 부트스트랩의 그리드시스템을 프로젝트시안에 맞게 SCSS 로 커스터마이징하여 반응형 레이아웃을 구현하는 법을 배웠습니다.

```Scss
// mobile  (<768px) --------------------------------
// * # of columns ---------------- 4
// * gutter ---------------------- 20px
// * margin ---------------------- 5px
// * container-size -------------- 100% - (5px * 2)

// tablet  (>=768px) ---------------------------------
// * # of columns ---------------- 12
// * gutter ---------------------- 20px
// * margin ---------------------- 30px
// * container-size -------------- 100% - (30px * 2)
// * max-container-size ---------- 960px

// desktop  (>=1200px) -------------------------------
// * # of columns ---------------- 12
// unit -------------------------- 75px
// * gutter ---------------------- 20px
// * container-size -------------- 1140px
// * max-container-size ---------- 1140px

$gutter: 20px;

$sm-columns: 4;
$sm-margin: 5px;

$md-breakpoint: 768px;
$md-columns: 12;
$md-margin: 30px;
$md-max-container: 960px + ($md-margin * 2);

$lg-breakpoint: 1200px;
$lg-columns: 12;
$lg-unit: 75px;
$lg-max-container: ($lg-unit + $gutter) * $lg-columns;

$grid-margin: $sm-margin + ($gutter / 2);


.container {
  width: 100%;
  padding: 0 $sm-margin;
  margin: 0 auto;

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  [class^='col-'] {
    // class 중에서 'col-' 로 시작하는 모든것 선택
    padding: 0 $gutter / 2;
  }

  @for $i from 1 through $sm-columns {
    .col-sm-#{$i} {
      width: percentage($i / $sm-columns);
    }
  }

  @media screen and (min-width: $md-breakpoint) {
    max-width: $md-max-container;
    padding: 0 $md-margin;

    @for $i from 1 through $md-columns {
      .col-md-#{$i} {
        width: percentage($i / $md-columns);
      }
    }
  }

  @media screen and(min-width: $lg-breakpoint) {
    max-width: $lg-max-container;
    padding: 0;

    @for $i from 1 through $lg-columns {
      .col-lg-#{$i} {
        width: ($lg-unit + $gutter) * $i;
      }
    }
  }
}
```

<br/>

- 사이트에서 자주 사용하는 요소들을 css module 로 따로 작성 하여 코드의 재사용성을 높이는 법을 배웠습니다.

<img width="176" alt="스크린샷 2022-04-05 오후 4 10 07" src="https://user-images.githubusercontent.com/99241230/161710479-b2e7f167-03ab-495a-b1a3-602033898d01.png">

<br/>

- Dom Event Handler + Javascript 사용하여 웹사이트 안에 다양한 이벤트를
  구현하는 법을 배웠습니다.

<br/>

- 스크롤에 따라서 product-tab의 active-tab 이 업데이트 되고, 해당 탭을 클릭하면 그 위치로 이동하는 스크롤 이벤트를 구현하는 과정에서 여러 이슈들과 버그가 생겨서 구현하는게 힘들었지만 그 과정에서 여러 다양한 이슈들을 핸들링 하는 법을 배웠습니다.
  <br/>
  또한 퍼포먼스 개선을 위하여 비용이 큰 이벤트요소에 외부라이브러리인 lodash.js 의 \_.throttle() 함수를 사용하여 퍼포먼스를 개선시켰습니다.

```js
const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll(
  '.product-tab-item button'
)

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

let currentActiveTab = productTab.querySelector('.is-active')
let disableUpdating = false

function toggleActiveTab() {
  const TabItem = this.parentNode

  if (currentActiveTab !== TabItem) {
    disableUpdating = true
    TabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = TabItem

    setTimeout(() => {
      disableUpdating = false
    }, 300)
  }
}

function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.getElementById(`${tabPanelId}`)

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabPanel)
})

const tabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]

const productTabPanelList = tabPanelIdList.map((panelId) => {
  const tabPanel = document.getElementById(`${panelId}`)
  return tabPanel
})

const productTabPanelPositionMap = {}

function detectTapPanelPosition() {
  productTabPanelList.forEach((panel) => {
    const id = panel.getAttribute('id')
    const position = window.scrollY + panel.getBoundingClientRect().top
    productTabPanelPositionMap[id] = position
  })
  updateActiveTab()
}

function updateActiveTab() {
  if (disableUpdating) {
    return
  }

  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP + 80 : TOP_HEADER_MOBILE + 8)

  let newActiveTab
  if (scrolledAmount >= productTabPanelPositionMap['product-recommendation']) {
    newActiveTab = productTabButtonList[4] // 추천버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-shipment']) {
    newActiveTab = productTabButtonList[3] // 배송/환불버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabButtonList[2] // 문의버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-review']) {
    newActiveTab = productTabButtonList[1] // 리뷰버튼
  } else {
    newActiveTab = productTabButtonList[0] // 상품정보버튼
  }

  const bodyHeight =
    document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0)
  if (window.scrollY + window.innerHeight === bodyHeight) {
    newActiveTab = productTabButtonList[4]
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode

    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add('is-active')

      if (currentActiveTab !== null) {
        currentActiveTab.classList.remove('is-active')
      }
      currentActiveTab = newActiveTab
    }
  }
}

window.addEventListener('load', detectTapPanelPosition)
window.addEventListener('resize', _.throttle(detectTapPanelPosition, 1000))
window.addEventListener('scroll', _.throttle(updateActiveTab, 300))
```
