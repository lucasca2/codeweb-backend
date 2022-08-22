## CodeWeb

First make sure that `node` and `docker` is installed on your computer.

### How to run?

**Step 1:** Install the dependencies

```
npm install
```

**Step 2:** Create the database on docker

```
docker-compose up
```

**Step 3:** Generate the prisma client

```
npx prisma generate
```

**Step 4:** Run the migrations

```
npx prisma migrate dev
```


**Step 5:** Run the API
```
npm run dev
```


### API Definition

---

| `GET`          | `/directories`     | Get all directories      |
|----------------|--------------------|--------------------------|

<details>
    <summary>Params</summary>

| Params    | Type  | Required | Description    |
|-----------|-------|----------|----------------|
| No params | 

</details>

---

| `GET`          | `/directories/:id` | Get a directory by id    |
|----------------|--------------------|--------------------------|

<details>
    <summary>Params</summary>

| Params | Type   | Required | Description          |
|--------|--------|----------|----------------------|
| `id`   | string | required | Id of file to return |

</details>

 ---

| `POST`         | `/directories`     | Create a directory       |
|----------------|--------------------|--------------------------|

<details>
    <summary>Params</summary>

| Params         | Type    | Required | Description                |
|----------------|---------|----------|----------------------------|
| `name`         | string  | required | Name of file               |
| `content`      | string  | -        | Content of file            |
| `isFolder`     | boolean | required | If is folder or file       |
| `parentId`     | string  | -        | Id of parent folder        |
| `lastModifier` | string  | -        | Name of last modifier user | 

</details>

---

| `PUT`          | `/directories/:id` | Update a directory by id |
|----------------|--------------------|--------------------------|

<details>
    <summary>Params</summary>

| Params         | Type    | Required | Description                |
|----------------|---------|----------|----------------------------|
| `name`         | string  | -        | Name of file               |
| `content`      | string  | -        | Content of file            |
| `isFolder`     | boolean | -        | If is folder or file       |
| `parentId`     | string  | -        | Id of parent folder        |
| `lastModifier` | string  | -        | Name of last modifier user | 

</details>

---

| `DELETE`       | `/directories/:id` | Remove a directory by id |
|----------------|--------------------|--------------------------|

<details>
    <summary>Params</summary>

| Params | Type   | Required | Description          |
|--------|--------|----------|----------------------|
| `id`   | string | required | Id of file to remove |

</details>
