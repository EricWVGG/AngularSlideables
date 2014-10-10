AngularSlideables
=================

A “pure” Angular implementation of jQuery-style toggleSlide().

See http://jsfiddle.net/3sVz8/19/ for an example.

USAGE:

Link to the library in your index (or require.js), and add 'angularSlideables' to your app modules.

No CSS is necessary. Add the “slideable” class or attribute to any hidden, slideable content. Add a slide-toggle attribute to any trigger.

This directive currently only works on single targetted IDs. I’ll expand it to cover classes if there’s demand.

EXAMPLES:

<pre><code>&lt;article ng-app="angularSlideables"&gt;
    &lt;h1 slide-toggle="#derp" &gt;Click here for Hipster Ipsum.&lt;/h1&gt;
    &lt;div id="derp" class="slideable"&gt;
        &lt;p&gt;Bespoke aesthetic Bushwick craft beer. Qui aesthetic butcher, cardigan ex scenester Neutra American Apparel mumblecore.&lt;/p&gt;
        &lt;p&gt;Ethical adipisicing before they sold out, sriracha Thundercats cardigan dolor deep v placeat. Flannel tattooed meggings direct trade banh mi tousled sriracha. Portland VHS ut dreamcatcher. Butcher eu irony, Banksy leggings eiusmod Pinterest hashtag Etsy asymmetrical lo-fi Helvetica quis incididunt adipisicing. YOLO cliche minim mlkshk dreamcatcher excepteur, Austin McSweeney's.&lt;/p&gt;
        &lt;p&gt;Coded @ Kinfolk Studios in Williamsburg, Brooklyn, 2013.&lt;/p&gt;
    &lt;/div&gt;
    &lt;p&gt;Your fresh artisinal Ipsum will appear above this paragraph. &lt;/p&gt;
&lt;/article&gt;
</code></pre>

The ID can be dynamically generated…

<pre><code>&lt;ul&gt;
    &lt;li ng-repeat="row in data"&gt;
        &lt;span slide-toggle="#row_{{$index}}" &gt;expand row #{{$index}}.&lt;/span&gt;
        &lt;div id="row_{{$index}}" class="slideable"&gt;
            &lt;p&gt;How are YOU doing?&lt;/p&gt;
        &lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</code></pre>

OPTIONAL ATTRIBUTES:

<pre><code>&lt;div id="derp" class="slideable" easing="linear" duration="5s"&gt;…&lt;/div&gt;</code></pre>
