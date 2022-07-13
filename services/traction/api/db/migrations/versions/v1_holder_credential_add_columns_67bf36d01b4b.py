"""v1-holder-credential-add-columns

Revision ID: 67bf36d01b4b
Revises: c81a005afd28
Create Date: 2022-07-08 14:05:35.570702

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel


# revision identifiers, used by Alembic.
revision = "67bf36d01b4b"
down_revision = "c81a005afd28"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "holder_credential",
        sa.Column("alias", sqlmodel.sql.sqltypes.AutoString(), nullable=True),
    )
    op.add_column(
        "holder_credential",
        sa.Column(
            "rejection_comment", sqlmodel.sql.sqltypes.AutoString(), nullable=True
        ),
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("holder_credential", "rejection_comment")
    op.drop_column("holder_credential", "alias")
    # ### end Alembic commands ###
