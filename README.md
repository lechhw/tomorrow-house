# 내일의 집

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button class="gnb-icon-button is-search lg-hidden" type="button">
    <i class="ic-search" aria-label="검색창 열기 버튼"></i>
  </button>
  <a class="gnb-icon-button is-cart" href="#">
    <i class="ic-cart" aria-label="장바구니 페이지로 이동 버튼"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="#">로그인</a>
    <a href="#">회원가입</a>
  </div>
</div>
```

- 로그인을 한 경우

```html
<div class="button-group">
  <button class="gnb-icon-button is-search lg-hidden" type="button">
    <i class="ic-search" aria-label="검색창 열기 버튼"></i>
  </button>

  <a class="gnb-icon-button sm-hidden" href="#">
    <i class="ic-bookmark" aria-label="스크랩북 페이지로 이동 버튼"></i>
  </a>

  <a class="gnb-icon-button sm-hidden" href="#">
    <i class="ic-bell" aria-label="내 소식 페이지로 이동 버튼"></i>
  </a>

  <a class="gnb-icon-button is-cart" href="#">
    <i class="ic-cart" aria-label="장바구니 페이지로 이동 버튼"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="마이메뉴 버튼"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-03.png" alt="유저 프로필 이미지" />
    </div>
  </button>
</div>
```

### 2. Sidebar Header

- 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="#">로그인</a>
  <a class="btn-primary btn-40" href="#">회원가입</a>
</div>
```

- 로그인을 한 경우

```html
<div class="sidebar-user">
  <a href="#">
    <div class="avatar-24">
      <img src="./assets/images/img-user-04.png" alt="" />
    </div>
    <strong class="username">이창환</strong>
  </a>
</div>
```
