const fs = require('fs');
const {join} = require('path');

const promiseTypes = [
  'Bluebird',
  'Thenable',
  'Query' // mongoose
];

const rules = {
  'adjacent-overload-signatures': true,
  'ban-comma-operator': true,
  'import-blacklist': [
    true,
    'lodash'
  ],
  'member-ordering': [
    true,
    {
      'order': [
        'public-static-field',
        'protected-static-field',
        'private-static-field',
        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',
        'public-constructor',
        'protected-constructor',
        'private-constructor',
        'public-static-method',
        'protected-static-method',
        'private-static-method',
        'public-instance-method',
        'protected-instance-method',
        'private-instance-method'
      ]
    }
  ],
  'no-empty-interface': true,
  'no-inferrable-types': true,
  'member-access': [
    true,
    'check-accessor',
    'check-constructor',
    'check-parameter-property'
  ],
  'no-magic-numbers': [
    true,
    -1,
    0,
    1,
    10,
    100,
    999,
    1000,
    59,
    60,
    60000,
    23,
    24,
    3600,
    3600000,
    86400,
    86400000,
    28,
    30,
    31,
    365,
    1024,
    2048,
    4096,
    8192,
    16384,
    32768,
    65536
  ],
  'no-namespace': false,
  'no-non-null-assertion': true,
  'no-reference': true,
  'no-unnecessary-type-assertion': true,
  'no-var-requires': true,
  'unified-signatures': true,
  'await-promise': [
    true,
    ...promiseTypes
  ],
  curly: [
    true,
    'ignore-same-line'
  ],
  forin: true,
  'label-position': true,
  'no-arg': true,
  'no-bitwise': true,
  'no-construct': true,
  'no-duplicate-super': true,
  'no-debugger': true,
  'no-duplicate-switch-case': true,
  'no-duplicate-variable': [
    true,
    'check-parameters'
  ],
  'no-empty': [
    true,
    'allow-empty-catch'
  ],
  'no-eval': true,
  'no-floating-promises': [
    true,
    ...promiseTypes
  ],
  'no-for-in-array': true,
  'no-implicit-dependencies': [
    true,
    'dev'
  ],
  'no-inferred-empty-object-type': true,
  'no-invalid-template-strings': true,
  'no-invalid-this': [
    true,
    'check-function-in-method'
  ],
  'no-misused-new': true,
  'no-object-literal-type-assertion': true,
  'no-return-await': true,
  'no-shadowed-variable': [
    true,
    {
      class: true,
      enum: true,
      function: true,
      import: true,
      interface: true,
      namespace: true,
      typeAlias: true,
      typeParameter: true,
      underscore: false
    }
  ],
  'no-sparse-arrays': true,
  'no-string-throw': true,
  'no-switch-case-fall-through': true,
  'no-this-assignment': [
    true,
    {
      'allow-destructuring': true
    }
  ],
  'no-unbound-method': [
    true,
    'allow-delete',
    'allow-typeof'
  ],
  'no-unsafe-finally': true,
  'no-unused-expression': [
    true,
    'allow-fast-null-checks',
    'allow-new'
  ],
  'no-var-keyword': true,
  'no-void-expression': [
    true,
    'ignore-arrow-function-shorthand'
  ],
  'prefer-conditional-expression': [
    true,
    'check-else-if'
  ],
  radix: true,
  'restrict-plus-operands': true,
  'triple-equals': true,
  'use-isnan': true,
  'cyclomatic-complexity': [
    true,
    20
  ],
  deprecation: true,
  eofline: true,
  indent: [
    true,
    'spaces',
    2
  ],
  'linebreak-style': [
    true,
    'LF'
  ],
  'max-classes-per-file': [
    true,
    1
  ],
  'max-file-line-count': [
    true,
    300
  ],
  'max-line-length': [
    true,
    120
  ],
  'no-default-export': true,
  'no-duplicate-imports': true,
  'object-literal-sort-keys': [
    true,
    'ignore-case'
  ],
  align: [
    true,
    'parameters',
    'arguments',
    'statements',
    'members',
    'elements'
  ],
  'array-type': [
    true,
    'array-simple'
  ],
  'arrow-parens': [
    true,
    'ban-single-arg-parens'
  ],
  'arrow-return-shorthand': true,
  'binary-expression-operand-order': true,
  'callable-types': true,
  'class-name': true,
  encoding: true,
  'import-spacing': true,
  'interface-over-type-literal': true,
  'newline-before-return': true,
  'new-parens': true,
  'no-consecutive-blank-lines': [
    true,
    1
  ],
  'no-irregular-whitespace': true,
  'no-reference-import': true,
  'no-trailing-whitespace': [
    true,
    'ignore-template-strings'
  ],
  'no-unnecessary-initializer': true,
  'no-unnecessary-qualifier': true,
  'number-literal-format': true,
  'object-literal-key-quotes': [
    true,
    'as-needed'
  ],
  'one-line': [
    true,
    'check-catch',
    'check-finally',
    'check-else',
    'check-open-brace',
    'check-whitespace'
  ],
  'one-variable-per-declaration': [
    true,
    'ignore-for-loop'
  ],
  'ordered-imports': [
    true,
    {
      'import-sources-order': 'case-insensitive',
      'named-imports-order': 'case-insensitive'
    }
  ],
  'prefer-method-signature': true,
  'prefer-switch': true,
  'prefer-template': [
    true,
    'allow-single-concat'
  ],
  quotemark: [
    true,
    'single',
    'avoid-escape'
  ],
  semicolon: [
    true,
    'always'
  ],
  'space-before-function-paren': [
    true,
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
      method: 'never',
      constructor: 'never'
    }
  ],
  'space-within-parens': [
    true,
    0
  ],
  'prefer-readonly': true,
  'switch-final-break': true,
  'type-literal-delimiter': [true, 'always'],
  'variable-name': [
    true,
    'check-format',
    'allow-leading-underscore',
    'require-const-for-all-caps',
    'ban-keywords'
  ],
  'return-undefined': true,
  'file-name-casing': false,
  'strict-boolean-expressions': false,
  'ban-ts-ignore': false,
  'function-constructor': true,
  'increment-decrement': false,
  'no-default-import': false,
  'unnecessary-constructor': true,
  'comment-type': false,
  'unnecessary-bind': true,
  'no-restricted-globals': false,
  'completed-docs': [
    true,
    (() => {
      const exported = () => ({visibilities: ['exported']});
      const privacies = () => ({privacies: ['protected', 'public']});
      const tags = () => ({
        tags: {
          existence: [
            'internal',
            'inheritDoc',
            'see'
          ]
        }
      });
      const exptags = () => ({
        ...exported(),
        ...tags()
      });

      return {
        classes: exptags(),
        enums: exptags(),
        'enum-members': false,
        functions: {
          overloads: true,
          ...exptags()
        },
        interfaces: exptags(),
        methods: {
          locations: 'all',
          ...privacies(),
          ...exptags()
        },
        namespaces: false,
        properties: {
          locations: 'all',
          ...privacies(),
          ...tags()
        },
        types: exptags(),
        variables: exptags()
      };
    })()
  ],
  'no-tautology-expression': true,
  'static-this': false,
  'unnecessary-else': false,
  'no-any': false,
  'no-null-undefined-union': false,
  'no-async-without-await': true,
  'strict-comparisons': false,
  whitespace: [
    true,
    'check-branch',
    'check-decl',
    'check-operator',
    'check-separator',
    'check-rest-spread',
    'check type',
    'check-type-operator',
    'check-preblock'
  ]
};

fs.writeFileSync(join(__dirname, 'common.json'), JSON.stringify({rules}, null, 2));
