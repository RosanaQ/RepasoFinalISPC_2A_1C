from django.contrib import admin

# Register your models here.

# Tabla UsuariosMedicos
from .models import UsuariosMedicos

# Tabla UsuariosMedicos
class UsuarioMedicoAdmin(admin.ModelAdmin):
    list_display=('id','Nombre_UM','Apellido_UM','Email_UM','Clave_UM','Celular_UM','Direccion_UM','Localidad_UM','Dni_UM','Matricula_UM')

# Registrar tablas
# Tabla UsuariosMedicos
admin.site.register(UsuariosMedicos,UsuarioMedicoAdmin)