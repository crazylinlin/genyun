var htmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports = {
	entry:{
		main:"./public/javascripts/main.js",
		index:"./public/javascripts/index.js",
		qa_list:"./public/javascripts/QA_list.js",
		course_list:"./public/javascripts/course_list.js",
		special_list:"./public/javascripts/special_list.js",
		special_detail:"./public/javascripts/special_detail.js",
		course_info:"./public/javascripts/course_info.js",
		feedback:"./public/javascripts/feedback.js",
		curricula:"./public/javascripts/curricula.js"
	},
	output:{
		filename:'js/[name].bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					{
						loader:'style-loader'
					},
					{
						loader:'css-loader',
						options:{
							//modules:true,
							importLoaders:1
						}
					},
					{
						loader:'postcss-loader',
						options:{
							plugins:function(){
								return [
									//require('precss'),
									require('autoprefixer')
								];
							}
						}
					}
				]
			},
			{
				test:/\.scss$/,
				use:[
					{
						loader:'style-loader'
					},
					{
						loader:'css-loader',
						options:{
							modules:true
						}
					},
					{
						loader:'postcss-loader',
						options:{
							plugins:function(){
								return [
									require('precss'),
									require('autoprefixer')
								];
							}
						}
					},
					{
						loader:'sass-loader'
					}
				]
			},
			{
				test:/\.html$/,
				use:[
					{
						loader:'html-loader'
					}
				]
			},
			{
				test:/\.(png|jpg|jpeg|gif|bmp)$/i,
				use:[
					{
						loader:'file-loader',
						options:{
							//limit:8192,
							name:'images/[name].[hash:7].[ext]'
						}
					},
					{
						loader:"image-webpack-loader",
						options:{
							query:{
								mozjpeg:{
									progressive:true
								},
								gifsicle:{
									interlaced:false
								},
								optipng:{
									optimizationLevel:7
								},
								pngquant:{
									quality:'65-90',
									speed:4
								}
							}
						}

					}
				]
			},
			{
				test:/\.(svg|woff|woff2|ttf|eot|)$/i,
				use:[
					{
						loader:'url-loader'
					}
				]
			},
			{
				test:/\.tpl$/,
				use:[
					{
						loader:'ejs-loader'
					}				
				]
			},
			{
				test:require.resolve('jquery'),
				use:[
					{
						loader:'expose-loader',
						options:'jQuery'
					},
					{
						loader:'expose-loader',
						options:'$'
					}
				]
			},
			{
				test:/\.js$/,
				exclude:path.resolve(__dirname,'node_modules'),
				include:path.resolve(__dirname,'public/javascripts'),
				use:[
					{
						loader:'babel-loader',
						options:{

						}
					}
				]
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			template:"public/index.html",
			filename:"index.html",
			inject:"body",
			chunks:['main','index']
		}),
		new htmlWebpackPlugin({
			template:"public/htm/QA_list.html",
			filename:"html/QA_list.html",
			inject:"body",
			chunks:['main','qa_list']
		}),
		new htmlWebpackPlugin({
			template:"public/htm/course_list.html",
			filename:"html/course_list.html",
			inject:"body",
			chunks:['main','course_list']
		}),
		new htmlWebpackPlugin({
			template:"public/htm/special_list.html",
			filename:"html/special_list.html",
			inject:"body",
			chunks:['main','special_list']
		}),
		new htmlWebpackPlugin({
			template:"public/htm/course_info.html",
			filename:"html/course_info.html",
			inject:"body",
			chunks:['main','course_info']
		}),
		new htmlWebpackPlugin({
			template:"public/htm/feedback.html",
			filename:"html/feedback.html",
			inject:"body",
			chunks:['main','feedback']
		}),
		new htmlWebpackPlugin({
			template:"public/htm/special_detail.html",
			filename:"html/special_detail.html",
			inject:"body",
			chunks:['main','special_detail']
		}),
		new htmlWebpackPlugin({
			template:"public/htm/vip/curricula.html",
			filename:"html/vip/curricula.html",
			inject:"body",
			chunks:['main','curricula']
		}),
	]
}