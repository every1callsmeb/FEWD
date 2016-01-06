`![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Responsive Basics

##Agenda

* Review - Relaxr Blog & Startup Martchmaker (next time)
* Fixed vs Responsive
* EMs and REMs
* Fixed vs Responsive
* Lab - Boxes and Responsive Boxes
* Media Queries
* Mobile Display
* Lab - Responsive Relaxr

##Review - Relaxr Blog & Startup Martchmaker

[Relaxr Blog](../Week_03_Layout/Assignments/relaxr_blog/solution/)
Startup Matchmaker _next class_

##EMs and REMs

* Relative to the font-size of the parent element.
* So, if your `body` has `font-size: 16px;`, 1 em is 16px and 2em is 32px
* Ems are a measure of length, and can be used for width, height, etc.
* Ems are always based on font-size, however!
* font-size always defaults to 16px (but normalize or reset can override that)
* Originally defined as the width of `M` in a given typeface in _print_ (not web!)
* REM is root em - instead of being relative to parent, the length is relative to the root `<html>` tag of your page (most modern browsers support this, but we'll use em so we can support older browsers)

##Fixed vs Responsive

Checkout these __Fixed__ sites

* [UPS.com](http://www.ups.com)
* [Google.com](http://www.google.com)

Checkout these __Responsive__ Sites

* [Relayrides.com](http://www.relayrides.com)
* [Generalassemb.ly](http://www.generalassemb.ly)
* [Dwolla.com](http://www.dwolla.com)

###Fixed Layout

* Used up until now in class
* Relies on a container of fixed width
* Usually 960px or 980px

###Responsive Layouts

* Different styles for different screen widths
* Two types - Fluid and Elastic

* Fluid - We will do this
* Size layout in percentages

* Elastic - You'll see this, but it's more advanced
* Sized layout in ems

##Lab - Boxes and Responsive Boxes

##Media Queries

```
@media only screen and
(max-width: xPx)
(min-width: xPx)
(max-device-width:xPx)
(min-device-width:xPx)
```

For iPad
```
(orientation: portrait)
(orientation: landscape)
```

Separate multiple clauses with “and”

Example

```
article {
  width: 70%
}

@media only screen and (max-width:768px) {
  article {
    width: 90%
  }
} 
```
---

##Mobile Display

```
<meta name="viewport" content="width=device-width, initial-scale=1">
Optional: user-scalable=none
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=none">
```

Why necessary?

* Mobile browser assumption of fixed layout of 980px
* Standard media queries sizes
    * Small: up to 768px
    * Medium: 768-991px
    * Large: 992px+

##Lab - Responsive Relaxr

##Additional Reading

* http://alistapart.com/article/responsive-web-design
* http://alistapart.com/article/designing-for-breakpoints
* http://alistapart.com/article/howtosizetextincss
* http://www.w3schools.com/cssref/css_units.asp
* http://www.smashingmagazine.com/2009/06/fixed-vs-fluid-vs-elastic-layout-whats-the-right-one-for-you/