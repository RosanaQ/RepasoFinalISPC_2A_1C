from django.contrib import admin

# Register your models here.

# Tabla UsuariosMedicos
from .models import UsuariosMedicos
from .models import UsuariosPacientes

# Tabla UsuariosMedicos
class UsuarioMedicoAdmin(admin.ModelAdmin):
    list_display=('id','Nombre_UM','Apellido_UM','Email_UM','Clave_UM','Celular_UM','Direccion_UM','Localidad_UM','Dni_UM','Matricula_UM')

# Tabla UsuariosPacientes
class UsuarioPacienteAdmin(admin.ModelAdmin):
    list_display=('id','Nombre_UP','Apellido_UP','Email_UP','Clave_UP','Celular_UP','Direccion_UP','Localidad_UP','Dni_UP')
# Registrar tablas
# Tabla UsuariosMedicos
admin.site.register(UsuariosMedicos,UsuarioMedicoAdmin)

# Tabla UsuariosPacientes
admin.site.register(UsuariosPacientes,UsuarioPacienteAdmin)