/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

function plural(n: number): number {
  if (n === 1) return 1;
  return 5;
}

export default [
  'ps',
  [
    ['غ.م.', 'غ.و.'],
    ,
  ],
  ,
  [
    ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    ['يونۍ', 'دونۍ', 'درېنۍ', 'څلرنۍ', 'پينځنۍ', 'جمعه', 'اونۍ'],
    ,
  ],
  ,
  [
    ['ج', 'ف', 'م', 'ا', 'م', 'ج', 'ج', 'ا', 'س', 'ا', 'ن', 'د'],
    [
      'جنوري', 'فبروري', 'مارچ', 'اپریل', 'مۍ', 'جون', 'جولای',
      'اگست', 'سېپتمبر', 'اکتوبر', 'نومبر', 'دسمبر'
    ],
  ],
  [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    [
      'جنوري', 'فبروري', 'مارچ', 'اپریل', 'مۍ', 'جون', 'جولای',
      'اگست', 'سپتمبر', 'اکتوبر', 'نومبر', 'دسمبر'
    ],
    [
      'جنوري', 'فېبروري', 'مارچ', 'اپریل', 'مۍ', 'جون', 'جولای',
      'اگست', 'سپتمبر', 'اکتوبر', 'نومبر', 'دسمبر'
    ]
  ],
  [
    ['له میلاد وړاندې', 'م.'], ,
    ['له میلاد څخه وړاندې', 'له میلاد څخه وروسته']
  ],
  6, [4, 5], ['y/M/d', 'y MMM d', 'د y د MMMM d', 'EEEE د y د MMMM d'],
  ['H:mm', 'H:mm:ss', 'H:mm:ss (z)', 'H:mm:ss (zzzz)'],
  [
    '{1} {0}',
    ,
    ,
  ],
  [',', '.', ';', '%', '\u200e+', '\u200e−', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'], '؋', 'افغانۍ', plural
];
