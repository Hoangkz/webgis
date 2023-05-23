# #webgis
# #Tạo file .env
# PORT = 3000
#
# USER = postgres
# HOST = localhost
# DATABASE = camhoang
# PASSWORD = 12345678
# PORT_DB = 5432

# #Layers
# URL = "http://localhost:8088/geoserver/camhoang/wms"
# LAYERS_DC = "camhoang:camhoangdc_1"
# LAYERS_UB = "camhoang:camhoangub_1"
# LAYERS_GT = "camhoang:camhoanggt_1"

# #Link Img Desc
# DESC_DC="http://localhost:8088/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=camhoang:camhoang_style"
# DESC_GT="http://localhost:8088/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=camhoang:camhoanggt_style"
# DESC_UB="http://localhost:8088/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=camhoang:camhoangub_style"

# #Header
# HEADER = "Cẩm Hoàng GIS"
# DESC1 = "Vùng"
# DESC2 = "GT"
# DESC3 = "Uỷ ban"
# #SQL Search Query
# QUERY = "SELECT *, ST_X(ST_Centroid(geom)) as x, ST_Y(ST_Centroid(geom)) as y, (ST_XMin(ST_Envelope(geom))+ST_XMax(ST_Envelope(geom)))/2 as xtb, (ST_YMin(ST_Envelope(geom))+ST_YMax(ST_Envelope(geom)))/2 as ytb FROM camhoangdc_1 WHERE LOWER(txtmemo) LIKE $1 OR LOWER(chusd) LIKE $2"
# #$1, $2 là tham số truy vấn, Là từ khoá muốn tìm kiếm
# WHERE_LENGTH = 2
# #WHERE_LENGTH là số lượng phần tử trong câu lệnh
# #Ví dụ trong câu trên có $1, $2 thì số lượng tìm kiếm là 2, WHERE_LENGTH = 2, 
# #Nếu thêm $3 thì số lượng là 3, WHERE_LENGTH = 3
