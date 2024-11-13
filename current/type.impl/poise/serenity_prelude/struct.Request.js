(function() {
    var type_impls = Object.fromEntries([["poise",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Request%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#23\">Source</a><a href=\"#impl-Clone-for-Request%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"poise/serenity_prelude/struct.Request.html\" title=\"struct poise::serenity_prelude::Request\">Request</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#23\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"poise/serenity_prelude/struct.Request.html\" title=\"struct poise::serenity_prelude::Request\">Request</a>&lt;'a&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","poise::serenity_prelude::http::RequestBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Request%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#23\">Source</a><a href=\"#impl-Debug-for-Request%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"poise/serenity_prelude/struct.Request.html\" title=\"struct poise::serenity_prelude::Request\">Request</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#23\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","poise::serenity_prelude::http::RequestBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Request%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#34\">Source</a><a href=\"#impl-Request%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"struct\" href=\"poise/serenity_prelude/struct.Request.html\" title=\"struct poise::serenity_prelude::Request\">Request</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#35\">Source</a><h4 class=\"code-header\">pub const fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.new\" class=\"fn\">new</a>(route: <a class=\"enum\" href=\"poise/serenity_prelude/enum.Route.html\" title=\"enum poise::serenity_prelude::Route\">Route</a>&lt;'a&gt;, method: <a class=\"enum\" href=\"poise/serenity_prelude/enum.LightMethod.html\" title=\"enum poise::serenity_prelude::LightMethod\">LightMethod</a>) -&gt; <a class=\"struct\" href=\"poise/serenity_prelude/struct.Request.html\" title=\"struct poise::serenity_prelude::Request\">Request</a>&lt;'a&gt;</h4></section><section id=\"method.body\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#46\">Source</a><h4 class=\"code-header\">pub fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.body\" class=\"fn\">body</a>(self, body: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;) -&gt; <a class=\"struct\" href=\"poise/serenity_prelude/struct.Request.html\" title=\"struct poise::serenity_prelude::Request\">Request</a>&lt;'a&gt;</h4></section><section id=\"method.multipart\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#51\">Source</a><h4 class=\"code-header\">pub fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.multipart\" class=\"fn\">multipart</a>(self, multipart: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"poise/serenity_prelude/struct.Multipart.html\" title=\"struct poise::serenity_prelude::Multipart\">Multipart</a>&gt;) -&gt; <a class=\"struct\" href=\"poise/serenity_prelude/struct.Request.html\" title=\"struct poise::serenity_prelude::Request\">Request</a>&lt;'a&gt;</h4></section><section id=\"method.headers\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#56\">Source</a><h4 class=\"code-header\">pub fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.headers\" class=\"fn\">headers</a>(self, headers: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"http/header/map/struct.HeaderMap.html\" title=\"struct http::header::map::HeaderMap\">HeaderMap</a>&gt;) -&gt; <a class=\"struct\" href=\"poise/serenity_prelude/struct.Request.html\" title=\"struct poise::serenity_prelude::Request\">Request</a>&lt;'a&gt;</h4></section><section id=\"method.params\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#61\">Source</a><h4 class=\"code-header\">pub fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.params\" class=\"fn\">params</a>(self, params: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>)&gt;&gt;) -&gt; <a class=\"struct\" href=\"poise/serenity_prelude/struct.Request.html\" title=\"struct poise::serenity_prelude::Request\">Request</a>&lt;'a&gt;</h4></section><section id=\"method.build\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#66\">Source</a><h4 class=\"code-header\">pub fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.build\" class=\"fn\">build</a>(\n    self,\n    client: &amp;<a class=\"struct\" href=\"reqwest/async_impl/client/struct.Client.html\" title=\"struct reqwest::async_impl::client::Client\">Client</a>,\n    token: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>,\n    proxy: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"reqwest/async_impl/request/struct.RequestBuilder.html\" title=\"struct reqwest::async_impl::request::RequestBuilder\">RequestBuilder</a>, <a class=\"enum\" href=\"poise/serenity_prelude/enum.Error.html\" title=\"enum poise::serenity_prelude::Error\">Error</a>&gt;</h4></section><section id=\"method.body_ref\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#110\">Source</a><h4 class=\"code-header\">pub fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.body_ref\" class=\"fn\">body_ref</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;</h4></section><section id=\"method.body_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#115\">Source</a><h4 class=\"code-header\">pub fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.body_mut\" class=\"fn\">body_mut</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;</h4></section><section id=\"method.headers_ref\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#120\">Source</a><h4 class=\"code-header\">pub fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.headers_ref\" class=\"fn\">headers_ref</a>(&amp;self) -&gt; &amp;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"http/header/map/struct.HeaderMap.html\" title=\"struct http::header::map::HeaderMap\">HeaderMap</a>&gt;</h4></section><section id=\"method.headers_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#125\">Source</a><h4 class=\"code-header\">pub fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.headers_mut\" class=\"fn\">headers_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"http/header/map/struct.HeaderMap.html\" title=\"struct http::header::map::HeaderMap\">HeaderMap</a>&gt;</h4></section><section id=\"method.method_ref\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#130\">Source</a><h4 class=\"code-header\">pub fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.method_ref\" class=\"fn\">method_ref</a>(&amp;self) -&gt; &amp;<a class=\"enum\" href=\"poise/serenity_prelude/enum.LightMethod.html\" title=\"enum poise::serenity_prelude::LightMethod\">LightMethod</a></h4></section><section id=\"method.route_ref\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#135\">Source</a><h4 class=\"code-header\">pub fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.route_ref\" class=\"fn\">route_ref</a>(&amp;self) -&gt; &amp;<a class=\"enum\" href=\"poise/serenity_prelude/enum.Route.html\" title=\"enum poise::serenity_prelude::Route\">Route</a>&lt;'_&gt;</h4></section><section id=\"method.params_ref\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#140\">Source</a><h4 class=\"code-header\">pub fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.params_ref\" class=\"fn\">params_ref</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[(&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>)]&gt;</h4></section><section id=\"method.params_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/serenity/http/request.rs.html#145\">Source</a><h4 class=\"code-header\">pub fn <a href=\"poise/serenity_prelude/struct.Request.html#tymethod.params_mut\" class=\"fn\">params_mut</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;mut [(&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>)]&gt;</h4></section></div></details>",0,"poise::serenity_prelude::http::RequestBuilder"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[14432]}