# 3.使用自定义工具包

## 3.1.下载工具包

```bash
# 名称是你前面指定的库的名称
npm install common-utils
```

## 3.2.网页中引入并使用

```html

<script src="./node_modules/common-utils/dist/common-utils.js"></script>
<script>
    CommonUtils.test()
</script>
```


## 3.3.模块化引入并使用
```js
// 使用ESM引入
import {test} from 'common-utils2'

test()

// 使用commonjs引入
const {test} = require('common-utils2')
test()
```
