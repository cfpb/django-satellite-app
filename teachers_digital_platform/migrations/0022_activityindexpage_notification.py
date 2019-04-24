# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-04-24 14:52
from __future__ import unicode_literals

from django.db import migrations
import wagtail.wagtailcore.blocks
import wagtail.wagtailcore.fields
import wagtail.wagtailimages.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('teachers_digital_platform', '0021_activityindexpage_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activityindexpage',
            name='header',
            field=wagtail.wagtailcore.fields.StreamField([('text_introduction', wagtail.wagtailcore.blocks.StructBlock([(b'eyebrow', wagtail.wagtailcore.blocks.CharBlock(help_text=b'Optional: Adds an H5 eyebrow above H1 heading text. Only use in conjunction with heading.', label=b'Pre-heading', required=False)), (b'heading', wagtail.wagtailcore.blocks.CharBlock(required=False)), (b'intro', wagtail.wagtailcore.blocks.RichTextBlock(required=False)), (b'body', wagtail.wagtailcore.blocks.RichTextBlock(required=False)), (b'links', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock([(b'text', wagtail.wagtailcore.blocks.CharBlock(required=False)), (b'url', wagtail.wagtailcore.blocks.CharBlock(default=b'/', required=False))]), required=False)), (b'has_rule', wagtail.wagtailcore.blocks.BooleanBlock(help_text=b'Check this to add a horizontal rule line to bottom of text introduction.', label=b'Has bottom rule', required=False))])), ('image', wagtail.wagtailcore.blocks.StructBlock([(b'image', wagtail.wagtailcore.blocks.StructBlock([(b'upload', wagtail.wagtailimages.blocks.ImageChooserBlock(required=False)), (b'alt', wagtail.wagtailcore.blocks.CharBlock(help_text=b"If the image is decorative (i.e., if a screenreader wouldn't have anything useful to say about it), leave the Alt field blank.", required=False))])), (b'image_width', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[(b'full', b'full'), (470, b'470px'), (270, b'270px'), (170, b'170px')])), (b'image_position', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[(b'right', b'right'), (b'left', b'left')], help_text=b'Does not apply if the image is full-width')), (b'text', wagtail.wagtailcore.blocks.RichTextBlock(label=b'Caption', required=False)), (b'is_bottom_rule', wagtail.wagtailcore.blocks.BooleanBlock(default=True, help_text=b'Check to add a horizontal rule line to bottom of inset.', label=b'Has bottom rule line', required=False))])), ('notification', wagtail.wagtailcore.blocks.StructBlock([(b'type', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[(b'default', b'Default'), (b'success', b'Success'), (b'warning', b'Warning'), (b'error', b'Error')])), (b'message', wagtail.wagtailcore.blocks.CharBlock(help_text=b'The main notification message to display.', required=True)), (b'explanation', wagtail.wagtailcore.blocks.TextBlock(help_text=b'Explanation text appears below the message in smaller type.', required=False)), (b'links', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock([(b'text', wagtail.wagtailcore.blocks.CharBlock(required=False)), (b'url', wagtail.wagtailcore.blocks.CharBlock(default=b'/', required=False))]), help_text=b'Links appear on their own lines below the explanation.', required=False))]))], blank=True),
        ),
    ]
