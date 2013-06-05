Cikonss
=========

Cikonss are created in order to be pure CSS, responsive and cross-browser usable. By "cross-browser" I mean IE8 as well. This means that CSS2 is in use which leads to limited shapes (and icons) available.

![Cikonss](http://cikonss.zzapwebdesign.com/assets/cikonss.png)

Some of icons do have border-radius property but this is mainly for fine styling in browsers that supports this property. This doesn't effect in loosing the shape of the icon.

##Demos

- [Cikonss - main page](http://cikonss.zzapwebdesign.com/)
- [Small Cikonss](http://cikonss.zzapwebdesign.com/small-icons.html)
- [Mid Cikonss](http://cikonss.zzapwebdesign.com/mid-icons.html)
- [Large Cikonss](http://cikonss.zzapwebdesign.com/large-icons.html)
- [Extra Large Cikonss](http://cikonss.zzapwebdesign.com/extra-large-icons.html)
- [Huge Cikonss](http://cikonss.zzapwebdesign.com/huge-icons.html)

##Usage

Include cikonss.css file in the head of your html file, like so:

`<link rel="stylesheet" href="cikonss.css" />`

Now you can simply choose out of 43 icons, 5 sizes and 3 variants. An icon is made of two `<span>` elements. Parent element defines:

  - **general style:** `.icon` *(mandatory)*
  - **the size:** `.icon-small`, `.icon-mid`, `.icon-large`, `.icon-extra-large`, `.icon-huge` *(mandatory)*
  - **variant:** `.icon-square`, `.icon-rounded` *(optional)*

`<span class="icon icon-small icon-square">...</span>`

Child element is the actual icon - available classes are in [preview](http://cikonss.zzapwebdesign.com/index.html#preview) section. Mandatory code for an icon would look like this:

`<span class="icon icon-mid"><span class="icon-mail"></span></span>`

##License

[MIT license](http://opensource.org/licenses/MIT)