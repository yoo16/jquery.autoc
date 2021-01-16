# jquery.autoc
## required
- jQuery ^3.5.0
- Bootstrap 4.x

## Download jquery.autoc.js
https://github.com/yoo16/jquery.autoc/tree/main/build

## CDN
```
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="jquery.autoc.js"></script>
```

## Use jquery.autoc.js
### JavaScript
```javascript
<script>
$(function () {
    $.fn.aoutoc({ id: 'toc' });
});
</script>
```

### HTML
```html
<div class="container">
    <div id="toc"></div>
</div>

<div class="container">
    <h2 class="h2">Title1</h2>
    <h3 class="h3">Sub Title1</h3>
    <div>Contents1</div>
    <h3 class="h3">Sub Title2</h3>
    <div>Contents2</div>

    <h2 class="h2">Title2</h2>
    <h3 class="h3">Sub Title1</h3>
    <div>Contents1</div>
    <h3 class="h3">Sub Title2</h3>
    <div>Contents2</div>
</div>
```
