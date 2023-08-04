import{_ as i,r as h,o as d,c as t,b as e,d as a,e as r,a as n}from"./app-538399c4.js";const l={},o=n('<h1 id="テスト駆動開発" tabindex="-1"><a class="header-anchor" href="#テスト駆動開発" aria-hidden="true">#</a> テスト駆動開発</h1><p>〜速い開発速度を保ち、着実に開発を進める〜</p><h2 id="テスト駆動開発とは" tabindex="-1"><a class="header-anchor" href="#テスト駆動開発とは" aria-hidden="true">#</a> テスト駆動開発とは</h2><p>テスト駆動開発（TDD：Test Driven Development）は、とても小さな開発プロセスを繰り返す、ソフトウェア開発手法の一つです。</p><p>その方法は、</p><ol><li>まず失敗するテストを書きます</li><li>次にそれが通るコードを書きます</li><li>読みやすく、綺麗になるように、リファクタリングします</li><li>上記を繰り返します。</li></ol><p>といった、とてもシンプルなメソッドです。</p><h2 id="なぜ使うか" tabindex="-1"><a class="header-anchor" href="#なぜ使うか" aria-hidden="true">#</a> なぜ使うか</h2><p>なぜ、TDDを行うのでしょうか。</p><p>それは速い開発スピードを永久に継続したいからです。</p><p>なぜTDDだと速い開発スピードを維持できるのでしょうか。</p><p>それは、</p><ol><li>速く開発したい</li><li>速く開発をするためには、綺麗なコードが必要</li><li>綺麗なコードを維持するためには、リファクタリングが必要</li><li>リファクタリングを好きな時にするためには、コードに対する自信が必要</li><li>コードに対する自信を持つためには、テストが必要</li></ol><p>では、いつテストを書くべきでしょうか。</p><p>実装前に書きましょう。</p><h2 id="どうやって行うのか" tabindex="-1"><a class="header-anchor" href="#どうやって行うのか" aria-hidden="true">#</a> どうやって行うのか</h2><p>基本は最初に書いた通り、下記のサイクルを回すことです。</p><ol><li>まず失敗するテストを書きます （できれば、どう失敗するのかを推測しましょう）</li><li>次にそれが通るコードを書きます　（綺麗じゃなくていいのでテストが通る実装をしましょう）</li><li>読みやすく、綺麗になるように、リファクタリングします</li><li>上記を繰り返します。</li></ol><p>この手法におけるコードに対する自信の扱い方について、</p><p>もう少し詳しく説明をします。</p><p>慣れている開発であれば、問題ないと思いますが、</p><p>慣れていないアプリケーションや慣れていても行き詰まってしまうなど、</p><p>開発中に不安がある時も多々あると思います。</p><p>そういった場合には、</p><p>TDDのサイクルを小さく回す、つまり、</p><p>開発のステップを小さくしてみてください。</p><p>例えば、足し算の関数を作る場合を想像してみてください。</p><p>いきなり、足し算を作ってエラーになった時、</p><p>足し方が悪いのか、数字の出力の方法が悪いのかわかりません。</p><p>まず、自分が理解していて、自信を持っている実装を促すようにテストを書きます。</p><p>例えば、まずは数字を出力する実装をし、</p><p>その後、足し算を実装します。</p><p>このように、確かなことから着実に進めるように開発のステップを小さくすることで</p><p>自信を持てますし、考えるべき対象を絞ることが可能になります。</p><p>もし、開発のステップを大きくして、いきなり足し算関数を作って失敗した場合に</p><p>出力が悪いのか、足し算の書き方が悪いのかが切り分けるのが大変です。　（このくらい簡単な関数なら大丈夫かもですが）</p><p>より複雑な関数になった場合はより大変になります。</p><p>また、頭でデバッグするよりも、テストを実行してしまった方が</p><p>圧倒的に速く答えを得ることができます。</p><p>言葉で説明してみましたが、この「開発のステップを自由自在にする」ことの強力さは、</p><p>実際に体験してみないと理解しづらいと思いますので</p>',41),s={href:"https://amzn.to/3czVEd4",target:"_blank",rel:"noopener noreferrer"},c=n('<h2 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h2><h3 id="テストで大事なこと" tabindex="-1"><a class="header-anchor" href="#テストで大事なこと" aria-hidden="true">#</a> テストで大事なこと</h3><p>テストはただ書けばいいというわけではありません。</p><p>テストを書いていく上で意識すべき大事なことをご紹介します。</p><ul><li>実装に依存していない（Freedom）</li><li>自信が持てる（Confidence）</li><li>速くテスト結果が得られる（Fast Feedback）</li><li>わかりやすく、読みやすい（Clean）</li></ul><h4 id="実装に依存していない-freedom" tabindex="-1"><a class="header-anchor" href="#実装に依存していない-freedom" aria-hidden="true">#</a> 実装に依存していない（Freedom）</h4><p>挙動が変わらないように実装を正しく変更した際にテストが壊れてしまうようでは</p><p>リファクタリングを自信を持って行うことができません。</p><p>実装を変更しても、要件通りに正しく動いていれば成功するテストが良いテストです。</p><h4 id="自信が持てる-confidence" tabindex="-1"><a class="header-anchor" href="#自信が持てる-confidence" aria-hidden="true">#</a> 自信が持てる（Confidence）</h4><p>きちんと挙動をチェックできているか不安なテストだと自信が持てません。</p><p>自信が持てないとリファクタリングができません。</p><p>実装の挙動を網羅しているのが、良いテストです。</p><h4 id="速くテスト結果が得られる-fast-feedback" tabindex="-1"><a class="header-anchor" href="#速くテスト結果が得られる-fast-feedback" aria-hidden="true">#</a> 速くテスト結果が得られる（Fast Feedback）</h4><p>テストの実行に30分とか1時間、かかっていては</p><p>テストを何度も実行することができません。</p><p>それでは、速い開発にもならずにTDDのメリットがなくなってしまいます。</p><p>過不足なくテストがあり、それぞれのテストが独立しているのが、良いテストです。</p><h4 id="わかりやすく、読みやすい-clean" tabindex="-1"><a class="header-anchor" href="#わかりやすく、読みやすい-clean" aria-hidden="true">#</a> わかりやすく、読みやすい（Clean）</h4><p>テストが書いてあっても、何をテストしているのかわからないテストだと</p><p>自信を持てませんし、修正がしづらくなります。</p><p>わかりやすく、読みやすいのが、良いテストです。</p><h2 id="よくある質問" tabindex="-1"><a class="header-anchor" href="#よくある質問" aria-hidden="true">#</a> よくある質問</h2><h3 id="テストがあればいいなら、後からテスト書けばいいのではないですか" tabindex="-1"><a class="header-anchor" href="#テストがあればいいなら、後からテスト書けばいいのではないですか" aria-hidden="true">#</a> テストがあればいいなら、後からテスト書けばいいのではないですか？</h3><p>個人的にはおすすめしません。</p><p>テスト駆動開発は、テスト駆動設計だとも考えられます。</p><p>最初に実装を書いてしまうとテストの書きづらいコードになってしまう場合が多いです。</p><p>テストがほとんどないシステムでテストを書きやすいように必要な挙動を維持したままリファクタリングや追加実装をした際に、</p><p>とても大変な思いをした経験があります。</p><h3 id="qaチームがいるから、テストコードはいらないと思いますが、いかがですか" tabindex="-1"><a class="header-anchor" href="#qaチームがいるから、テストコードはいらないと思いますが、いかがですか" aria-hidden="true">#</a> QAチームがいるから、テストコードはいらないと思いますが、いかがですか？</h3><p>テストの大事な要素に速いフィードバックがあります。</p><p>全ての実装を作り終えた後にQAに渡し、</p><p>根幹の部分を直さないといけないようなバグを見つかる可能性もゼロではありません。</p><p>それをQAのタイミングまで待たなくてはならないのは時間がもったいないです。</p><p>テストを書かずにQAにテストをお願いし、</p><p>直すと他にも影響が出てしまうようなバグでリリースが延期したことがあると聞いたことがあります。</p><h3 id="テスト書く時間があるなら実装する時間に当てたいのですが、いかがですか" tabindex="-1"><a class="header-anchor" href="#テスト書く時間があるなら実装する時間に当てたいのですが、いかがですか" aria-hidden="true">#</a> テスト書く時間があるなら実装する時間に当てたいのですが、いかがですか？</h3><p>それでもいいでしょう。緊急で開発しないといけない場合など、</p><p>その瞬間の速度が大事であれば、決定次第だと思います。</p><p>ただし、ずっとその状態を続けるということであれば、それはお勧めしません。</p><p>テストのないコードはほぼ間違いなく、</p><p>開発すればするほど、開発速度が落ちていきます。</p><p>また、関係のない（と思われる）ところでデグレが生じるなど、</p><p>品質も低下すると予想されます。</p><p>さらに、テストがないことで気づけず、QAも関係ないと思っていた箇所なので見逃してしまい、</p><p>本番環境に出てしまうといった最悪の事態を経験したことがあります。</p><p>一時的にテストを書かないのは、仕方がないかもしれませんが、</p><p>余裕ができた際にテストを追加していくことをお勧めします。</p><h3 id="テストのないアプリケーションを担当することになりましたが、どうすればいいですか" tabindex="-1"><a class="header-anchor" href="#テストのないアプリケーションを担当することになりましたが、どうすればいいですか" aria-hidden="true">#</a> テストのないアプリケーションを担当することになりましたが、どうすればいいですか？</h3><p>追加開発する必要があるのであれば、</p><p>その周辺のコードを優先的にテストを追加していきましょう。</p><p>ある程度、自信が持てたら、実際にTDDで実装していきましょう。</p><p>必要がない部分に関しては、テストを追加しなくてよいですが、</p><p>今後、開発する予定があるのであれば、テストを追加していくとよいでしょう。</p><h2 id="参考資料" tabindex="-1"><a class="header-anchor" href="#参考資料" aria-hidden="true">#</a> 参考資料</h2>',55),f={href:"https://amzn.to/3czVEd4",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.youtube.com/watch?v=xPL84vvLwXA",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.jamesshore.com/Blog/Red-Green-Refactor.html",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"さいごに",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#さいごに","aria-hidden":"true"},"#"),a(" さいごに")],-1),x={href:"https://forms.gle/TKUJ2Gs9EoH2jQvp7",target:"_blank",rel:"noopener noreferrer"};function m(D,k){const p=h("ExternalLinkIcon");return d(),t("div",null,[o,e("p",null,[e("a",s,[a("テスト駆動開発"),r(p)]),a(" を写経することをおすすめします。")]),c,e("ul",null,[e("li",null,[e("a",f,[a("テスト駆動開発"),r(p)])]),e("li",null,[e("a",_,[a("TDD: The Bad Parts — Matt Parker"),r(p)])]),e("li",null,[e("a",u,[a("Red-Green-Refactor"),r(p)])])]),b,e("p",null,[a("文章の改善のため、フィードバックや質問などありましたら、"),e("a",x,[a("こちら"),r(p)]),a("からお願いいたします。")])])}const T=i(l,[["render",m],["__file","test-driven-development.html.vue"]]);export{T as default};
