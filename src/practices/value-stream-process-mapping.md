# バリューストリーム・プロセスマッピング

〜プロセスの無駄を洗い出す〜

## バリューストリーム・プロセスマッピングとは

トヨタ生産方式の改善手法が元になっているプロセス改善技術です。

顧客に価値（バリュー）を提供するまでにある工程をすべて洗い出し、

流れ図で一覧し、ボトルネックを明確にし、改善点をあぶり出します。

## なぜバリューストリーム・プロセスマッピングをするのか

* 作業が実際に行われるバリューストリームやプロセスについて、共通の理解が得られる
* ボトルネックが明確になる
* 個別最適ではなく、全体最適を考えられる
* 改善案の選定がしやすくなる

顧客へ価値を提供するまでに無駄のない最短の工程を

目指すために行います。

## どうやっておこなうのか

### 必要なもの

* ホワイトボード、もしくは模造紙
* 付箋
* マーカー

### 言葉の説明

PT（プロセスタイム）：対象のプロセスを実行している時間

LT（リードタイム）：次のプロセスに移行するまでの所要時間（PT＋待ち時間と遅延時間）

完成と正確性の割合：手戻りが発生せずにプロセスが進む割合

### やり方

1. 対象システムのアーキテクチャを作成し、ディスカッション
1. 開発サイクルの概要を作成し、ディスカッション
1. プロセスを洗い出し、マップに貼り出していく
    * 納品から書く
    * プロセス名、必要なリソース、LT、待ち時間、PT、完成と正確性の割合を書く
    * 担当者が同じ場合は実線、異なる場合は点線
1. 抜け漏れの確認
1. プロセスのグルーピング
1. 活動の割合、全体の完成と正確性の割合、全プロセス時間、労働要求を計算する
1. 7つのムダの観点で改善ポイントを洗い出す
1. 未来のバリューストリームマップを作る
1. 改善案の検討・優先順位付け・アクションプランの策定など

参考：

<img src="/value-stream-mapping.jpg" alt="Image of Value Stream Mapping" width="400"/>

### 計算方法

* 活動の割合

  PTの合計 ÷ LTの合計 × 100

* 全体の完成と正確性の割合

  全プロセスの完成と正確性の割合を掛け合わせる

* 全プロセス時間

  全プロセスのPTを足し合わせる

* 労働要求（FTE：Full-time Equivalent、フルタイム当量 / 常勤換算）

  全PT(時間) × 年間発生数 ÷ 利用可能な仕事時間（時間/年/従業員）

### よくある質問

#### プロジェクトの大きさによってLT、PTが違うのですが、どうすればいいですか。

前提条件を共有しましょう。

最も多いプロジェクトの大きさでまずは作成してみましょう。

もし大きさによってバリューストリームが変わるなどがあれば、

大きさごとにマップを作成しましょう。

#### 7つのムダとは何ですか？

7つのムダとは、トヨタ生産方式におけるムダを洗い出すための分類です。

下記が7つのムダになります。

* 加工のムダ
* 在庫のムダ
* 造りすぎのムダ
* 手待ちのムダ
* 動作のムダ
* 運搬のムダ
* 不良・手直しのムダ

#### 改善はどのようにすればいいですか？

ECRSという手法があります。

ECRSとは下記の英語の頭文字をとったものです。

* Eliminate（排除）
* Combine（結合と分離）
* Rearrange（入替えと代替）
* Simplify（簡素化）

この4つの観点で改善を考えていくと、

効果が大きく、リスクの小さい改善案を考えることが可能になります。

## 参考資料
* [Value Stream & Process Mapping](https://openpracticelibrary.com/practice/vsm-and-mbpm/)
* [トヨタ生産方式にもとづく「モノ」と「情報」の流れ図で現場の見方を変えよう!!](https://amzn.to/3czV4fo)
* [App013 ここはあえて紙と](https://www.slideshare.net/TechSummit2016/app013)
* [Value Stream Mapping (how to)](https://patrickroose.wordpress.com/advisory-community/business-process-value-streams-how-to/)
* [カイゼンジャーニー](https://amzn.to/2Lu1PDB)

## さいごに

文章の改善のため、フィードバックや質問などありましたら、[こちら](https://forms.gle/TKUJ2Gs9EoH2jQvp7)からお願いいたします。
