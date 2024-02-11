// Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?
if (-1 || 0) alert( 'first' ); // true
if (-1 && 0) alert( 'second' ); // false
if (null || -1 && 1) alert( 'third' ); // true