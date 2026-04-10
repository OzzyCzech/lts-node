# lts-node

[![NPM Downloads](https://img.shields.io/npm/dm/lts-node?style=for-the-badge)](https://www.npmjs.com/package/lts-node)
[![NPM Version](https://img.shields.io/npm/v/lts-node?style=for-the-badge)](https://www.npmjs.com/package/lts-node)
[![NPM License](https://img.shields.io/npm/l/lts-node?style=for-the-badge)](https://github.com/OzzyCzech/lts-node/blob/main/LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/OzzyCzech/lts-node?style=for-the-badge)](https://github.com/OzzyCzech/lts-node/commits/main)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/OzzyCzech/lts-node/main.yml?style=for-the-badge)](https://github.com/OzzyCzech/lts-node/actions)

Get active Node.js LTS and [current](https://nodejs.org/en/about/releases/) version numbers.

## Usage

### CLI via npx

```sh
npx lts-node
```

Output:

```json
{
  "active": [20, 22, 24, 25],
  "lts": 24,
  "current": 25
}
```

| Field     | Description                                             |
|-----------|---------------------------------------------------------|
| `active`  | All major versions within their support window          |
| `lts`     | Highest major version in Active LTS phase               |
| `current` | Highest released major version                          |

### Library

```sh
npm install lts-node
```

```ts
import { getNodeVersions } from 'lts-node';

const { active, lts, current } = await getNodeVersions();
console.log(active);  // [20, 22, 24, 25]
console.log(lts);     // 24
console.log(current); // 25
```

## Data source

Version data is fetched from the official Node.js Release Working Group schedule:

```
https://raw.githubusercontent.com/nodejs/Release/main/schedule.json
```

## License

[MIT](./LICENSE)

Made with ❤️ by [Roman Ožana](https://ozana.cz)
