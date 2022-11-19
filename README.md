# Yumemi coding test

deployed on this URL  
https://yumemi-test-jack-0209.vercel.app/

## basic infomation

- 課題の取り組み開始から完了までに要した合計時間
  →20 時間ほど
- これまでの総合的なプログラミング歴
  → 大学在学時：1 年
  社会人：6 年
- これまでの WEB フロントエンドプログラミング歴
  →html,css7 年
  React,Webpack,storybook 2 年

## good points

- vite を使用することで軽量化を図ることができた
- Issue を作成し、それに対する PR を作成することができた
- Test を書くことができた
- Master が更新されると自動的に vercel でリリースされるよう設定できた
- API key を隠すことができた（serverless function で API を隠す方法があり実装したかったが時間が足りなかった）

## needs to improve

- 小さいコンポーネントで storybook を作成したかった
- API key の隠し方をもっと良い方法を模索したかった
- コンポーネントの粒度をもう少し細かくすべきだった

## next action

- 作成して終わりにするのではなく、リファクターしより良いコンポーネント設計をする
- テストもカバレッジをもっと意識し記述する
- FB をもらうことができればその修正対応を行う

## local development

Before you start, you need to add `VITE_API_KEY` to `.env` file.  
You can get API key from here.  
https://opendata.resas-portal.go.jp/

commands to start.

```
npm install
npm run dev
```

## how to run test

```
npm run test
```

## lint and format

```
npm run lint
npm run format
```

## deployment

Deployed on vercel.  
You need an account for that.
