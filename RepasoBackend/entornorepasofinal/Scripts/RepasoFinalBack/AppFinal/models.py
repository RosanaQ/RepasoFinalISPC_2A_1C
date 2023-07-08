from django.db import models

from datetime import datetime
# Create your models here.
# Tabla UsuariosMedicos
class UsuariosMedicos(models.Model):
    Nombre_UM=models.CharField(max_length=45)
    Apellido_UM=models.CharField(max_length=45)
    Email_UM=models.CharField(max_length=45)
    Clave_UM=models.CharField(max_length=45)
    Celular_UM=models.CharField(max_length=45,blank=True,default="Celular_UM")
    Direccion_UM=models.CharField(max_length=100,blank=True,default="Direccion_UM")
    Localidad_UM=models.CharField(max_length=45,blank=True,default="Localidad_UM")
    Dni_UM=models.CharField(max_length=8,blank=True,default="Dni_UM")
    Matricula_UM=models.CharField(max_length=8,blank=True,default="Mat_UM")
    class Meta:
        db_table="UsuariosMedicos"
        verbose_name="Usuarios Medicos"
        verbose_name_plural="UsuariosMedicos"
    def __unicode__(self):
        return "{}".format(self.id)
    def __str__(self):
        return "{}".format(self.id)
    