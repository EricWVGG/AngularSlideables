AngularSlideables
=================

A “pure” Angular implementation of jQuery-style toggleSlide().

See http://jsfiddle.net/3sVz8/8/ for an example.

USAGE:

Link to the library in your index (or require.js), and add 'angularSlideables' to your app modules.

No CSS is necessary. Add the “slideable” class to any hidden, slideable content. Add a slide-toggle attribute to any trigger.

This directive currently only works on single targetted IDs. I’ll expand it to cover classes if there’s demand.

<pre><code>    &lt;article&gt;
        &lt;h1 slide-toggle="#derp" &gt;Click here for Hipster Ipsum.&lt;/h1&gt;
        &lt;div id="derp" class="slideable"&gt;
            &lt;p&gt;Bespoke aesthetic Bushwick craft beer. Qui aesthetic butcher, cardigan ex scenester Neutra American Apparel mumblecore. Ethical adipisicing before they sold out, sriracha Thundercats cardigan dolor deep v placeat.&lt;/p&gt;
            &lt;p&gt;Flannel tattooed meggings direct trade banh mi tousled sriracha. Portland VHS ut dreamcatcher. Butcher eu irony, Banksy leggings eiusmod Pinterest hashtag Etsy asymmetrical lo-fi Helvetica quis incididunt adipisicing. YOLO cliche minim mlkshk dreamcatcher excepteur, Austin McSweeney's.&lt;/p&gt;
        &lt;/div&gt;
        &lt;h2&gt;Your fresh artisinal Ipsum will appear above this paragraph.&lt;/h2&gt;
    &lt;/article&gt;
</code></pre>

OPTIONAL ATTRIBUTES
<pre><code>&lt;div id="derp" class="slideable" easing="linear" duration="5s"&gt;…&lt;/div&gt;</code></pre>
