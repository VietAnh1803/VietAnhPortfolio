Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bitmap = [System.Drawing.Bitmap]::new($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$background = [System.Drawing.ColorTranslator]::FromHtml('#111716')
$ink = [System.Drawing.ColorTranslator]::FromHtml('#f1f3eb')
$accent = [System.Drawing.ColorTranslator]::FromHtml('#d7ef73')
$quiet = [System.Drawing.ColorTranslator]::FromHtml('#aebaaa')
$rule = [System.Drawing.ColorTranslator]::FromHtml('#536257')

$graphics.Clear($background)
$inkBrush = [System.Drawing.SolidBrush]::new($ink)
$accentBrush = [System.Drawing.SolidBrush]::new($accent)
$quietBrush = [System.Drawing.SolidBrush]::new($quiet)
$rulePen = [System.Drawing.Pen]::new($rule, 2)
$display = [System.Drawing.Font]::new('Arial', 144, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$mono = [System.Drawing.Font]::new('Consolas', 24, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$small = [System.Drawing.Font]::new('Consolas', 18, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$format = [System.Drawing.StringFormat]::GenericTypographic

$graphics.DrawString('NVA.', $mono, $accentBrush, 67, 45, $format)
$graphics.DrawString('PORTFOLIO / 2026', $small, $quietBrush, 922, 50, $format)
$graphics.DrawLine($rulePen, 67, 106, 1133, 106)

$graphics.DrawString('NGUYEN', $display, $inkBrush, 58, 151, $format)
$graphics.DrawString('VIET ANH', $display, $inkBrush, 177, 312, $format)
$nameWidth = $graphics.MeasureString('VIET ANH', $display, 1000, $format).Width
$graphics.DrawString('.', $display, $accentBrush, 177 + $nameWidth - 6, 312, $format)

$graphics.DrawLine($rulePen, 67, 520, 1133, 520)
$graphics.DrawString('DATA ENGINEER / APPLIED ML', $small, $inkBrush, 67, 550, $format)
$graphics.DrawString('HO CHI MINH CITY, VN', $small, $quietBrush, 856, 550, $format)

$target = Join-Path $PSScriptRoot '..\public\og-cover.png'
$bitmap.Save($target, [System.Drawing.Imaging.ImageFormat]::Png)

$display.Dispose()
$mono.Dispose()
$small.Dispose()
$inkBrush.Dispose()
$accentBrush.Dispose()
$quietBrush.Dispose()
$rulePen.Dispose()
$graphics.Dispose()
$bitmap.Dispose()
