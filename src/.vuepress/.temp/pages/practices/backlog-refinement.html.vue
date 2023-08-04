<template><div><h1 id="バックログ・リファイメント" tabindex="-1"><a class="header-anchor" href="#バックログ・リファイメント" aria-hidden="true">#</a> バックログ・リファイメント</h1>
<p>〜バックログ・アイテムの詳細化、優先度付け〜</p>
<h2 id="バックログ・リファイメントとは" tabindex="-1"><a class="header-anchor" href="#バックログ・リファイメントとは" aria-hidden="true">#</a> バックログ・リファイメントとは</h2>
<p>バックログ・リファイメントではバックログ・アイテムの</p>
<ul>
<li>詳細化</li>
<li>分割</li>
<li>見積もり</li>
<li>優先度付け</li>
<li>検証方法の検討</li>
</ul>
<p>を行います。</p>
<p>バックログ・アイテムとは、プロダクトに必要な要件・仕様の最小単位です。</p>
<h2 id="なぜバックログ・リファイメントをするのか" tabindex="-1"><a class="header-anchor" href="#なぜバックログ・リファイメントをするのか" aria-hidden="true">#</a> なぜバックログ・リファイメントをするのか</h2>
<p>プロダクトには何が含まれ、それを作るにはどのくらいかかり、</p>
<p>できたことをどうやって決めるのかなどを関係者で話し合い決定します。</p>
<p>ここで決定した優先度を元に開発チームが製造に取り組むことになります。</p>
<h2 id="どうやっておこなうのか" tabindex="-1"><a class="header-anchor" href="#どうやっておこなうのか" aria-hidden="true">#</a> どうやっておこなうのか</h2>
<h3 id="必要なもの" tabindex="-1"><a class="header-anchor" href="#必要なもの" aria-hidden="true">#</a> 必要なもの</h3>
<ul>
<li>大きめの付箋</li>
</ul>
<h3 id="やり方" tabindex="-1"><a class="header-anchor" href="#やり方" aria-hidden="true">#</a> やり方</h3>
<p>今回紹介するのはあくまでも一例です。</p>
<p>作成にはいろいろな方法があります。</p>
<p>自分たちの組織にあった方法を模索してみましょう。</p>
<ol>
<li><a href="/practices/user-story-mapping">ユーザーストーリーマッピング</a>などを用いて、ストーリーを作成。</li>
<li>ストーリーをバックログ・アイテムに落とし込む　（INVESTを意識。※INVESTについては後述）</li>
<li>見積もり、サイズ、優先度、受入条件などを話し合いながら決定する</li>
</ol>
<h2 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h2>
<h3 id="受入条件をきちんと書こう" tabindex="-1"><a class="header-anchor" href="#受入条件をきちんと書こう" aria-hidden="true">#</a> 受入条件をきちんと書こう</h3>
<p>受入条件はとても大事です。</p>
<p>バックログ・アイテムを実装して、どのような条件を満たしたら、完成になるのかを定義します。</p>
<p>その際に、「要件ができていること」などのように曖昧に書いてはいけません。</p>
<p>できているの定義が曖昧なので人によって認識が異なる場合があります。</p>
<p>「確定ボタンが表示されていること」などのように</p>
<p>きちんと話し合ってなるべく具体的に受入条件を書きましょう。</p>
<h3 id="investを意識しよう" tabindex="-1"><a class="header-anchor" href="#investを意識しよう" aria-hidden="true">#</a> INVESTを意識しよう</h3>
<p>INVESTというのは、下記の頭文字をとったもので、</p>
<p>バックログを作る際に意識すると良いものとなっています。</p>
<ul>
<li><strong>I</strong>ndependent（独立している）</li>
<li><strong>N</strong>egotiable（交渉可能）</li>
<li><strong>V</strong>aluable（価値がある）</li>
<li><strong>E</strong>stimatable（見積もり可能）</li>
<li><strong>S</strong>mall（十分に小さい）</li>
<li><strong>T</strong>estable（検証可能）</li>
</ul>
<h3 id="機能ではなく価値を重視しよう" tabindex="-1"><a class="header-anchor" href="#機能ではなく価値を重視しよう" aria-hidden="true">#</a> 機能ではなく価値を重視しよう</h3>
<p>今まで機能を洗い出すことを重視している様な開発をされていた多いのですが、</p>
<p>バックログ・アイテムを機能基準で考えてしまうということです</p>
<p>本当にその機能はお客様の価値を生み出しているのでしょうか？</p>
<p>この観点で考えられるかどうかであなたのプロダクトの成功確率が大きく変わってくるはずです</p>
<p>また、バックログ・アイテムの解決策をチームメンバーと議論できるととてもよいです</p>
<p>そのためには選択肢がいくつか考えられるように、そのバックログ・アイテムで何をしたいのかを明確にしましょう</p>
<h3 id="_2、3-スプリント先のことがわかっていると調査が前もってできる" tabindex="-1"><a class="header-anchor" href="#_2、3-スプリント先のことがわかっていると調査が前もってできる" aria-hidden="true">#</a> 2、3 スプリント先のことがわかっていると調査が前もってできる</h3>
<p>見積もりを行うために調査が必要な場合も多いです</p>
<p>調査は見積もりができるようになるまで行います</p>
<p>その調査にどのくらい価値があるのか、と　調査にかかる時間を天秤にかけて</p>
<p>調査する意義があるとするならば、スプリントに調査を組み込んでいきましょう。</p>
<h3 id="見積もりが多かった場合、もっと分けられないか考えよう" tabindex="-1"><a class="header-anchor" href="#見積もりが多かった場合、もっと分けられないか考えよう" aria-hidden="true">#</a> 見積もりが多かった場合、もっと分けられないか考えよう</h3>
<p>見積もりのポイント数が多かった場合、十分に詳細化、分割ができていないことを疑いましょう。</p>
<p>あまりにも大きいポイント数だとそれだけ完了しないリスク（不確実性）も大きくなります。</p>
<p>特にチームを開始したばかりの時期は細かすぎるくらい細かいバックログ・アイテムにする気持ちで取り組んでみましょう。</p>
<h2 id="参考資料" tabindex="-1"><a class="header-anchor" href="#参考資料" aria-hidden="true">#</a> 参考資料</h2>
<ul>
<li><a href="https://openpracticelibrary.com/practice/backlog-refinement/" target="_blank" rel="noopener noreferrer">Backlog Refinement<ExternalLinkIcon/></a></li>
</ul>
<h2 id="さいごに" tabindex="-1"><a class="header-anchor" href="#さいごに" aria-hidden="true">#</a> さいごに</h2>
<p>文章の改善のため、フィードバックがありましたら、<a href="https://forms.gle/TKUJ2Gs9EoH2jQvp7" target="_blank" rel="noopener noreferrer">こちら<ExternalLinkIcon/></a>からお願いいたします。</p>
</div></template>


