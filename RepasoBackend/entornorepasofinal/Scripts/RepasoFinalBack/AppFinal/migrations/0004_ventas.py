# Generated by Django 4.2.3 on 2023-07-13 02:31

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('AppFinal', '0003_servicios'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ventas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('FechaVenta_V', models.DateField(default=datetime.datetime.now)),
                ('TotalVenta_V', models.DecimalField(decimal_places=2, max_digits=18)),
                ('id_S', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AppFinal.servicios')),
                ('id_UP', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='AppFinal.usuariospacientes')),
            ],
            options={
                'verbose_name': 'Ventas a Cuentas',
                'verbose_name_plural': 'Ventas',
                'db_table': 'Ventas',
            },
        ),
    ]
