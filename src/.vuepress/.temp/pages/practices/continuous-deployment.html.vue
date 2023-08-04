<template><div><h1 id="継続的デプロイメント" tabindex="-1"><a class="header-anchor" href="#継続的デプロイメント" aria-hidden="true">#</a> 継続的デプロイメント</h1>
<p>〜最短時間でプロダクトを顧客に届ける〜</p>
<h2 id="継続的デプロイメントとは" tabindex="-1"><a class="header-anchor" href="#継続的デプロイメントとは" aria-hidden="true">#</a> 継続的デプロイメントとは</h2>
<p>すべての変更を自動で本番環境へデプロイメントすることです。</p>
<h2 id="なぜ継続的デプロイメントをするのか" tabindex="-1"><a class="header-anchor" href="#なぜ継続的デプロイメントをするのか" aria-hidden="true">#</a> なぜ継続的デプロイメントをするのか</h2>
<p>本番環境へのデプロイメントは大変な作業であるため、</p>
<p>自動化し、頻繁に実施することでリスクを減らす目的があります。</p>
<h2 id="どうやっておこなうのか" tabindex="-1"><a class="header-anchor" href="#どうやっておこなうのか" aria-hidden="true">#</a> どうやっておこなうのか</h2>
<h3 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件" aria-hidden="true">#</a> 前提条件</h3>
<p>継続的インテグレーション、継続的デリバリーで実績を積んでからやりましょう</p>
<p>やり方はシンプルで、効果も高いプラクティスですが、</p>
<p>かなり危険性が高いプラクティスです。</p>
<p>品質の高い自動テストが存在しないと不具合だらけのプロダクトが本番環境にデプロイされることになります。</p>
<p>また、会社のルールとして責任者による許可のない修正のデプロイが許容されているかを確認してから行いましょう。</p>
<h3 id="やり方" tabindex="-1"><a class="header-anchor" href="#やり方" aria-hidden="true">#</a> やり方</h3>
<p><a href="/practices/continuous-integration">継続的インテグレーション</a>のパイプラインの後に「継続的デプロイメント」のパイプラインを構築します。</p>
<p>継続的インテグレーションツールは基本的に「継続的デプロイメント」もできるようになっているため、</p>
<p>同じツールを使うのが、複雑にならずに良いと思います。</p>
<h2 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h2>
<h3 id="すぐに差し戻しできるような仕組みを用意しておく" tabindex="-1"><a class="header-anchor" href="#すぐに差し戻しできるような仕組みを用意しておく" aria-hidden="true">#</a> すぐに差し戻しできるような仕組みを用意しておく</h3>
<p>リリース後に問題が発生した場合、すぐに復旧が可能なように差し戻しの仕組みを導入しておくことをおすすめします。</p>
<p>品質の高い自動テストがあるとはいえ、完璧なテストはありえません。</p>
<p>何らかの問題が発生した場合は、すぐに元の状態に戻せるようにしておきましょう。</p>
<p>そのための工夫としては</p>
<p>ブルー・グリーンデプロイメントやカナリアリリースなどがあるので興味のある方は調べてみてください。</p>
<h2 id="参考資料" tabindex="-1"><a class="header-anchor" href="#参考資料" aria-hidden="true">#</a> 参考資料</h2>
<ul>
<li><a href="https://amzn.to/2zE9blc" target="_blank" rel="noopener noreferrer">継続的デリバリー 信頼できるソフトウェアリリースのためのビルド・テスト・デプロイメントの自動化<ExternalLinkIcon/></a></li>
</ul>
<h2 id="さいごに" tabindex="-1"><a class="header-anchor" href="#さいごに" aria-hidden="true">#</a> さいごに</h2>
<p>文章の改善のため、フィードバックがありましたら、<a href="https://forms.gle/TKUJ2Gs9EoH2jQvp7" target="_blank" rel="noopener noreferrer">こちら<ExternalLinkIcon/></a>からお願いいたします。</p>
</div></template>


