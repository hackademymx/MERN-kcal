// viene default en nodejs - ayuda a obtener rutas
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDevelopment = process.env.NODE_ENV === 'development'

/* BEFORE: hasta que se utilize en plugins crearlo y esplicarlo
** AFTER: usaremos HtmlWebpackPlugin
*/
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  // toma el template de nuestro index
  template: './src/index.html',
  // el nombre del html minificado que se generara el el folder "dist"
  filename: './index.html'
})

module.exports = {
  // entry: Dirección a nuestro archivo de entrada
  entry: {
    app: './src/index.js'
  },
  /* output: webpack genera un archivo de salida, donde tenderemos
  ** todo lo que llegue a procesar webpack
  */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
    chunkFilename: '[name].bundle.js'
  },
  // configuraremos las reglas para las extenciones que utilizaremos
  module: {
    rules: [
      {
        /*
        ** Creamos el .babelrc con:
        ** { "presets": ["@babel/preset-env", "@babel/preset-react"] }
        ** Que lo ejecutara babel loader
        */
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      // instalamos html-loader - para minimizar el html
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      // instalamos style-loader y css-loader (para usar css-modules)
      /*
      ** Instalamos:
      ** style-loader: injects our styles into our DOM.
      ** css-loader@2.0.0: interprets @import and @url() and resolves them (resolverlos)
      ** mini-css-extract-plugin: extracts our CSS out of the JavaScript bundle into a separate file, essential for production builds.
      */
      {
        test: /\.css$/,
        oneOf: [
          {
            test: /\.module\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  exportOnlyLocals: false,
                  camelCase: true
                }
              }
            ]
          },
          {
            use: [MiniCssExtractPlugin.loader, "css-loader"]
          }
        ]
      },
      // instalamos url-loader para cargar imagenes
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      }
    ]
  },
  /*
    CODING-SPLITING
    ** Encuentra módulos que se comparten entre un fragmento y
    ** los divide en fragmentos separados para reducir la duplicación
    ** o separar los módulos del proveedor de los módulos de la aplicación.
   */
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  /*
  ** Caonfiguraremos algunos plugins
   */
  plugins: [
    // da de alta CleanWebpackPlugin en el top
    // borra la carpeta dist (que esta en el path del output)
    // cada vez que se inicaliza webpack
    new CleanWebpackPlugin(),
    // Ir a la variable htmlWebpackPlugin
    htmlWebpackPlugin,
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name]-[contenthash].css"
    })

  ],
  resolve: {
    alias: {
      component: path.resolve(__dirname, './src/component'),
      helpers: path.resolve(__dirname, './src/helpers')
    }
  }
}