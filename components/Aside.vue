<template>
  <div>
    <aside>
      <div class="aside-top">
        <button
          class="btn btn-border-none btn-double-left"
          data-toggle-js="aside-toggle"
        >
          <i class="fa fa-angle-double-right" />
        </button>
        <button
          class="btn btn-border-none btn-tab active"
          data-tab="list"
        >
          <i class="fa fa-heart-o" />
        </button>
        <button
          class="btn btn-border-none btn-tab"
          data-tab="alert"
        >
          <i class="fa fa-bell-o" />
        </button>
      </div>
      <div class="aside-bottom">
        <button class="btn btn-border-none btn-account">
          <i class="fa fa-user-o" />
        </button>
        <div class="box-info-account">
          <a
            class="btn btn-primary"
            href="#"
          >Sign in</a>
          <a
            class="btn btn-blue"
            href="#"
          >Create account</a>
          <i class="fa fa-angle-down" />
        </div>
      </div>
    </aside>

    <div class="aside-hideable">
      <div
        class="tab-content tab-list active"
        data-tab-name="list"
      >
        <h4 class="tab-title">
          List
        </h4>
        <div class="placeholder">
          <div class="placeholder-item bg-gray">
            <div class="placeholder-img">
              <img
                src="/img/example-list-1-icon.png"
                alt=""
              >
            </div>
            <div class="placeholder-content">
              <div class="s s6" />
              <div class="s s4" />
            </div>
          </div>
          <div class="placeholder-item bg-gray">
            <div class="placeholder-img">
              <img
                src="/img/example-list-2-icon.png"
                alt=""
              >
            </div>
            <div class="placeholder-content">
              <div class="s s5" />
              <div class="s s1" />
            </div>
          </div>
          <div class="placeholder-item bg-gray">
            <div class="placeholder-img">
              <img
                src="/img/example-list-3-icon.png"
                alt=""
              >
            </div>
            <div class="placeholder-content">
              <div class="s s3" />
              <div class="s s4" />
            </div>
          </div>
        </div>

        <div class="box-info-account">
          <a
            class="btn btn-primary"
            href="/login/"
          >Sign in</a>
          <a
            class="btn btn-blue"
            href="/signup/"
          >Create account</a>
        </div>
      </div>
      <div
        class="tab-content tab-alert"
        data-tab-name="alert"
      >
        <h4 class="tab-title">
          Alerts
        </h4>
        <div class="placeholder">
          <div class="placeholder-item bg-gray">
            <div class="placeholder-img">
              <img
                src="/img/example-alert-1-icon.png"
                alt=""
              >
            </div>
            <div class="placeholder-content">
              <div class="s s6" />
              <div class="s s-green" />
              <div class="s s4" />
            </div>
          </div>
          <div class="placeholder-item bg-gray">
            <div class="placeholder-img">
              <img
                src="/img/example-alert-2-icon.png"
                alt=""
              >
            </div>
            <div class="placeholder-content">
              <div class="s s5" />
              <div class="s s-green" />
              <div class="s s1" />
            </div>
          </div>
          <div class="placeholder-item bg-gray">
            <div class="placeholder-img">
              <img
                src="/img/example-alert-3-icon.png"
                alt=""
              >
            </div>
            <div class="placeholder-content">
              <div class="s s3" />
              <div class="s s-red" />
              <div class="s s4" />
            </div>
          </div>
        </div>

        <div class="box-info-account">
          <a
            class="btn btn-primary"
            href="/login/"
          >Sign in</a>
          <a
            class="btn btn-blue"
            href="/signup/"
          >Create account</a>
        </div>
      </div>
    </div>
  </div>
</template>
