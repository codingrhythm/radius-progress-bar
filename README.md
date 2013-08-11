radius-progress-bar
===================

HTML5 Radius Progress Bar jQuery plug-in


Usage
_____


1. Include `jquery.radius-progress-bar.js` and `style.css` in your html file
2. Add `radius-progress` to your element class e.g. `<div class="radius-progress"></div>`
3. Define `data-current-progress` with a percentage integer value (0 - 100) for initial progress position
4. Define `data-progress` with a percentage integer value (0 - 100) for target progress position
5. Define `data-value` with a integer or float that states the maximum (100%) value of this progress bar
6. Define `data-unit` with a string to add unit label to the value defined in step 5
7. Done!


A complete settings will be something like this

```
<div class="radius-progress" data-current-progress="0" data-progress="80" data-value="100" data-unit="%"><div class="label">Radius Progress<br/><small></small></div></div>
```


Demo
____

![Alt Demo](demo.png)
