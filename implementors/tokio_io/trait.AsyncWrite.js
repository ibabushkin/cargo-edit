(function() {var implementors = {};
implementors["hyper"] = ["impl&lt;E&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl&lt;'a, E&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'a E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl&lt;'a&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>","impl <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>",];
implementors["hyper_tls"] = ["impl&lt;T:&nbsp;<a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for <a class=\"enum\" href=\"hyper_tls/enum.MaybeHttpsStream.html\" title=\"enum hyper_tls::MaybeHttpsStream\">MaybeHttpsStream</a>&lt;T&gt;",];
implementors["reqwest"] = ["impl&lt;S&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_tls/struct.TlsStream.html\" title=\"struct tokio_tls::TlsStream\">TlsStream</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>","impl&lt;E&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl&lt;'a, E&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'a E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl&lt;'a&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>","impl <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>","impl&lt;T&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for <a class=\"enum\" href=\"hyper_tls/stream/enum.MaybeHttpsStream.html\" title=\"enum hyper_tls::stream::MaybeHttpsStream\">MaybeHttpsStream</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>",];
implementors["tokio_core"] = ["impl <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_core/net/struct.TcpStream.html\" title=\"struct tokio_core::net::TcpStream\">TcpStream</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/net/struct.TcpStream.html\" title=\"struct tokio_core::net::TcpStream\">TcpStream</a>","impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_core/reactor/struct.PollEvented.html\" title=\"struct tokio_core::reactor::PollEvented\">PollEvented</a>&lt;E&gt;","impl&lt;'a, E&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/reactor/struct.PollEvented.html\" title=\"struct tokio_core::reactor::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'a E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>",];
implementors["tokio_io"] = [];
implementors["tokio_tls"] = ["impl&lt;S:&nbsp;<a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_tls/struct.TlsStream.html\" title=\"struct tokio_tls::TlsStream\">TlsStream</a>&lt;S&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
